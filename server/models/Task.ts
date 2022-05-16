import { Schema, model } from "mongoose";

//Schema es para definir que vamos a guardar en la base de datos

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        done: {
            type: Boolean,
            default: false,
        },
    },
    {
        versionKey: false,
    }
);

export default model("Task", taskSchema);
