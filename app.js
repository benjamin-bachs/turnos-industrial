import { supabase } from "./supabase.js";

async function cargarTurnos() {

    const { data, error } = await supabase
        .from("inscripciones")
        .select("*");

    if(error){
        console.error(error);
        return;
    }

    console.log(data);
}
