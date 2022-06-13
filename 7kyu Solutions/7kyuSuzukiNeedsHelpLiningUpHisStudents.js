function lineupStudents(students) {
    return students.split(' ').sort((a, z) => {
        if (a.length > z.length) {
            return -1;
        } else if (a.length < z.length) {
            return 1;
        }
        if (a > z) {
            return -1;
        } else if (a < z) {
            return 1;
        }
    })
}

let s1 =
    "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi";

console.log(lineupStudents(s1));