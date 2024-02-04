export default async function getAdditionalReadings(id: string) {
    await new Promise(r => setTimeout(r, 500));

    return {
        id: id,
        readings: [
            "https://en.wikipedia.org/wiki/Lotka%E2%80%93Volterra_equations",
            "https://en.wikipedia.org/wiki/Nonlinear_system",
            "https://en.wikipedia.org/wiki/Hudson%27s_Bay_Company",
            "https://en.wikipedia.org/wiki/The_Baader_Meinhof_Complex",
            "https://en.wikipedia.org/wiki/John_Cena",
            "https://en.wikipedia.org/wiki/Collatz_conjecture",
            "https://en.wikipedia.org/wiki/Finite_element_method",
            "https://en.wikipedia.org/wiki/September_11_attacks"
        ]
    }
}