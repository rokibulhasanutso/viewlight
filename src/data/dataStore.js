const defaultLayout = [
    { name: "Mobile", width: 375, height: 340 },
    { name: "Tablet", width: 768, height: 340 },
    { name: "Laptop", width: 1024, height: 340 },
];

const tailwindLayout = [
    { name: "Small", shortName: "sm", width: 640, height: 340 },
    { name: "Medium", shortName: "md", width: 768, height: 340 },
    { name: "Large", shortName: "lg", width: 1024, height: 340 },
    { name: "Extra Large", shortName: "xl", width: 1280, height: 340 },
    { name: "Double Extra Large", shortName: "2xl", width: 1536, height: 340 }
]

const bootstrapLayout = [
    { name: "Small", shortName: "sm", width: 576, height: 340 },
    { name: "Medium", shortName: "md",  width: 768, height: 340 },
    { name: "Large", shortName: "lg", width: 992, height: 340 },
    { name: "Extra Large", shortName: "xl", width: 1200, height: 340 },
    { name: "Double Extra Large", shortName: "xxl", width: 1400, height: 340 }
]

export {defaultLayout, tailwindLayout, bootstrapLayout}