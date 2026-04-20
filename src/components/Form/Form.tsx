import React from "react"
import { useForm, Controller } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import Input from "../Input/Input"
import Select from "../Select/Select"
import "./Form.scss"

interface IFormInput {
    firstName: string
    lastName: string
    gender: string[]
    GameType: string[]

}

export interface FormProps {
}

const Form: React.FC<FormProps> = () => {
    const { control, handleSubmit, reset } = useForm<IFormInput>({
        defaultValues: {
            firstName: "",
            lastName: "",
            gender: [],
            GameType: [],
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log("表单提交成功！", data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 20 }}>

            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input {...field} placeholder="名字" />}
            />

            <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                    <Select
                        value={field.value}
                        mode="single"
                        options={[
                            { value: "男", label: "男" },
                            { value: "女", label: "女" },
                            { value: "非人类", label: "非人类" }
                        ]}
                    ></Select>
                )}
            />

            <Controller
                name="GameType"
                control={control}
                render={({ field }) => (
                    <Select
                        value={field.value}
                        mode="multiple"
                        options={[
                            { value: "第五人格", label: "第五人格" },
                            { value: "明日方舟", label: "明日方舟" },
                            { value: "原神", label: "原神" },
                            { value: "王者荣耀", label: "王者荣耀" },
                            { value: "英雄联盟", label: "英雄联盟" },
                            { value: "和平精英", label: "和平精英" }
                        ]}
                    />
                )}
            />

            <button type="submit" className="form-submit-btn">
                提交
            </button>
        </form>
    )
}

export default Form
