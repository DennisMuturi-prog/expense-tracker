export interface Expense{
    id?:number | string,
    amount:number,
    dateIncurred:string,
    expenseDescription:string,
    necessary:boolean
}
export interface ModifyAction{
    action:string,
    expensedata:Expense
}