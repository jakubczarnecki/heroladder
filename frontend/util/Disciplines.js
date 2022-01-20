export const Disciplines = [
    { icon: "volleyball-ball", value: "volleyball" },
    { icon: "baseball-ball", value: "tennis" },
    { icon: "table-tennis", value: "table tennis" },
    { icon: "basketball-ball", value: "basketball" },
    { icon: "futbol", value: "football" },
    { icon: "running", value: "custom" },
]

export const getDisciplineIcon = (disciplineName) => {
    const found = Disciplines.find((d) => d.value === disciplineName)
    return found ? found.icon : "running"
}
