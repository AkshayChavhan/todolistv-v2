import React ,{useState} from 'react'
import ShowTodo from './ShowTodo';

export default function Todo(props) {
    //storing task
    const [task ,setTask]=useState('add some task')
    const [data ,setData]=useState([])

    const onChangeHandler = (e) =>{
        setTask(e.target.value);
    }

    const submitHandler =(e) =>{
        e.preventDefault();
        console.log('submit');
        const newData = task ;
        console.log(newData)
        setData([...data ,newData]);
        console.log(...data)
        setTask('')
    }

    const deleteItem = (a) =>{
        const finalData = data.filter((curEle ,index) =>{
            return index !== a
        })

        setData(finalData)
    }

  return (
    <div className='container'>
        <div className='row justify-content-center align-item-center main-row'>
            <div className='col shadow main-col bg-white'>
                <div className='row bg-primary text-white'>
                    <div className='col p-2'>
                    <h4 className='text-center'>Todo App</h4>
                    </div>
                </div>
                <form onSubmit={submitHandler}>
                    <div className='row justify-content-between text-white p-2'>
                        <div className='form-group flex-fill mb-2 col-9'>
                            <input id='todo-input' type='text' className='form-control' value={task} onChange={onChangeHandler} />
                        </div>
                        <button type='submit' className='btn btn-primary mb-2 ml-2 col-3'>Add Todo</button>
                    </div>
                </form>
                {
                    data.map((value ,index) =>{
                        <ShowTodo key={index} id={index} task={value} 
                        onSelect={deleteItem(props.id)} />
                    })
                }
            </div>
        </div>

    </div>
  )
}
