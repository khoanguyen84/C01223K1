import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Link } from 'react-router-dom';
import randomstring from "randomstring";
import StudentService from "../../services/studentService";
import { toast } from 'react-toastify';

const schema = yup.object({
    name: yup.string().min(5, "name is too short").max(50, "name is too long").required("You must enter student name!"),
    age: yup.number().positive().integer().required().typeError('age is invalid'),
    mark: yup.number().min(0).max(10).required().typeError('mark is invalid'),
    city: yup.string().required(),
})
function CreateStudent() {
    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })
    const handleCreateStudent = async (data) => {
        data = {
            ...data,
            id: randomstring.generate(16)
        }
        let createResult = await StudentService.create(data);
        if(Object.keys(createResult).length){
            toast.success(`Student ${createResult.name} created success`);
            reset();
        }
        else{
            toast.error('Something went wrong, please try again!')
        }
    }
    return (
        <div>
            <Link className="btn btn-link btn-sm" to={"/learning-use-effect"}>Back to list</Link>
            <h1 className="text-success">Create Student</h1>
            <form onSubmit={handleSubmit(handleCreateStudent)} className="form-group">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" {...register("name")} className="form-control form-control-sm" />
                            <span className="text-danger">{errors.name?.message}</span>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Age</label>
                            <input type="text" {...register('age')} className="form-control form-control-sm" />
                            <span className="text-danger">{errors.age?.message}</span>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Mark</label>
                            <input type="text" {...register('mark')} className="form-control form-control-sm" />
                            <span className="text-danger">{errors.mark?.message}</span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="form-label">Gender</label>
                            <select className="form-control form-control-sm" {...register('gender')}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">City</label>
                            <input type="text" {...register('city')} className="form-control form-control-sm"/>
                            <span className="text-danger">{errors.city?.message}</span>
                        </div>
                        <div className="form-group">
                            <label className="form-label">&nbsp;</label>
                            <input type="submit" className="btn btn-dark btn-sm form-control form-control-sm" value="Create" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateStudent;