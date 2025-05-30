const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: "Swift for apple"

}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

