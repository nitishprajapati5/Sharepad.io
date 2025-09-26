export const languageSelector = (lang: string): string => {
    if(lang === "javascript"){
        console.log("JS")
        return `console.log("Hello JavaScript")`
    }
    else if(lang === "cpp"){
        return `#include<iostream>\nusing namespace std;\nint main(){\nreturn 0;\n}`
    }
    else if(lang === "python"){
        return `print("Python Language")`
    }
    return `console.log("Hello JavaScript!")`
}