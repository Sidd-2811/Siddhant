export const API_KEY = 'AIzaSyB9tNcRREjn3sQEFnGYBkMQNOdGm6J1aDo';

export const value_converter = (value)=>{
if(value>=1000000){
    return Math.floor(value/1000000)+"M";
}
else if(value >= 1000){
    return Math.floor(value/1000)+"k";
}
else{
    return value;
}
}