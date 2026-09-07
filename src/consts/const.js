export const RESULTS_PER_PAGE = 3

export const FILTERS = {
    "TECHNOLOGY": [
        {
            id: crypto.randomUUID(),
            literal: "Tecnología",
            value: "",
            isPopular: false
        },
        {
            id: crypto.randomUUID(),
            literal: "Javascript",
            value: "javascript",
            isPopular: true
        },
        {
            id: crypto.randomUUID(),
            literal: "Python",
            value: "python",
            isPopular: true
        },
        {
            id: crypto.randomUUID(),
            literal: "React",
            value: "react",
            isPopular: true
        },
        {
            id: crypto.randomUUID(),
            literal: "Node.js",
            value: "node",
            isPopular: true
        },
        {
            id: crypto.randomUUID(),
            literal: "Java",
            value: "java",
            isPopular: false
        },
        {
            id: crypto.randomUUID(),
            literal: "Mobile",
            value: "mobile",
            isPopular: false
        },
        {
            id: crypto.randomUUID(),
            literal: "C#",
            value: "csharp",
            isPopular: false
        },
        {
            id: crypto.randomUUID(),
            literal: "C",
            value: "c",
            isPopular: false
        },
        {
            id: crypto.randomUUID(),
            literal: "C++",
            value: "c++",
            isPopular: false
        },
        {
            id: crypto.randomUUID(),
            literal: "Ruby",
            value: "ruby",
            isPopular: false
        },
        {
            id: crypto.randomUUID(),
            literal: "PHP",
            value: "php",
            isPopular: false
        }
    ],
    "LOCATION": [
        {
            id: crypto.randomUUID(),
            literal: "Ubicación",
            value: ""
        },
        {
            id: crypto.randomUUID(),
            literal: "Remoto",
            value: "remoto"
        },
        {
            id: crypto.randomUUID(),
            literal: "Ciudad de México",
            value: "cdmx",
        },

        {
            id: crypto.randomUUID(),
            literal: "Guadalajara",
            value: "guadalajara"
        },

        {
            id: crypto.randomUUID(),
            literal: "Monterrey",
            value: "monterrey"
        },
        {
            id: crypto.randomUUID(),
            literal: "Barcelona",
            value: "barcelona"
        }
    ],
    "EXPERIENCE": [
        {
            id: crypto.randomUUID(),
            literal: "Nivel de experiencia",
            value: ""
        },
        {
            id: crypto.randomUUID(),
            literal: "Junior",
            value: "junior"
        },
        {
            id: crypto.randomUUID(),
            literal: "Mid-level",
            value: "mid"
        },
        {
            id: crypto.randomUUID(),
            literal: "Senior",
            value: "senior"
        },
        {
            id: crypto.randomUUID(),
            literal: "Lead",
            value: "lead"
        }
    ]
}