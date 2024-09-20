interface researchArticlesTypes{
    id:number,
    imgSrc:string,
    title: string,
    topic: string,
    dateOfPublication: string,
    link: string
}

export const researchArticles:researchArticlesTypes[]=[
    {
        id: 1,
        imgSrc:"/bg.jpg",
        title: "Risk factors for fall-related mild traumatic brain injuries among older adults: A Systematic Review",
        topic:  "Neurological",
        dateOfPublication: "December 2023",
        link:"https://www.researchgate.net/publication/376724644_RISK_FACTORS_FOR_FALL-RELATED_MILD_TRAUMATIC_BRAIN_INJURIES_AMONG_OLDER_ADULTS_A_SYSTEMATIC_REVIEW"
    },
    {
        id: 1,
        imgSrc:"/bg-blue.jpg",
        title: "Automated Neonate Exchange Transfusion- Albert & Kisser",
        topic:  "Neurological",
        dateOfPublication: "September 2021",
        link:"https://www.researchgate.net/publication/356209747_Automated_Neonate_Exchange_Transfusion-_Albert_Kisser?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSIsInByZXZpb3VzUGFnZSI6InB1YmxpY2F0aW9uIn19"
    }
]