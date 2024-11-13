import { Topic } from "@/generated"

const today = new Date().toISOString()

export const initialReportInput = {
    startDate: "",
    endDate: today,
    selectedDate: [],
    selectedTopics: [],
}



export type reportInputType ={
    startDate: string,
    endDate: string,
    selectedDate: string[],
    selectedTopics: string[],
}

export const dayMap: { [key: string]: string } = {
    monday: 'Даваа',
    tuesday: 'Мягмар',
    wednesday: 'Лхагва',
    thursday: "Пүрэв",
    friday: "Баасан",
    saturday: "Бямба",
    sunday: "Ням",
};