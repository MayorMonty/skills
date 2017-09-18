import { existant, filterAsync, mapAysnc } from "./util";
import { get } from "vexdb";

/**
 * Get skills data using a wide variety of filters
 * @param {Object} filters The filters to apply
 * @param {String} filters.program The program, VRC or VEXU
 * @param {String} filters.sku The event at which the run was performed
 * @param {String} filters.grade Team Grade Level, "Middle School", "High School", or "College"
 * @param {String} filters.country The country of the team
 * @param {String} filters.region The region of the team
 * @param {String} filters.city The city of the team
 * @param {Date}   filters.before The datetime of the event start
 * @param {Date}   filters.after The datetime of the event start
 * @param {Number} filters.type The skills run type, 0 for Robot Skills, 1 for Programming and 2 for Combined
 * @param {String} filters.team The team that performed the run
 * @param {String} filters.season
 */
export default async function({ program, sku, grade, country, region, city, before, after, type = 2, team, season = "In The Zone" } = {}) {
    
    let inital = await get("skills", existant({ program, sku, type, team, season }));

    if (before) {
        inital = await filterAsync(inital, async function(run) {
            let date = new Date(await (get("events", { sku: run.sku })).start);
            return before < date;
        });
    }

    if (after) {
        inital = await filterAsync(inital, async function(run) {
            let date = new Date(await (get("events", { sku: run.sku })).start);
            return after > date;
        });
    }

    if (country) {
        inital = await filterAsync(inital, async function(run) {
            let teamCountry = (await get("teams", { team: run.team })).country;
            return teamCountry === country;
        });
    }

    if (region) {
        inital = await filterAsync(inital, async function(run) {
            let teamRegion = (await get("teams", { team: run.team })).region;
            return teamRegion === region;
        });
    }

    if (city) {
        inital = await filterAsync(inital, async function(run) {
            let teamCity = await (get("teams", { team: run.team })).city
            return teamCity === city;
        });
    }

    if (grade) {
        inital = await filterAsync(inital, async function(run) {
            let teamGrade = await (get("teams", { team: run.team })).grade
            return teamGrade === grade;
        });
    }

    inital = inital.sort((a, b) => b.score - a.score);

    // Include info from event page and team page
    inital = await mapAysnc(inital, async (run, index) => 
        Object.assign(run, 
            { event: await get("events", { sku: run.sku })},
            { team: await get("teams", { team: run.team })},
            { filterRank: index + 1 }
        )
    )
    
    return inital;
}

