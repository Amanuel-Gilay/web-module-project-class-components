import React, { component } from 'react';

export default class TodoForm extends component {
    constructor(){
        super();
        this.this.state = {
            todoText:'text',
        }
    }

    handlechanges = (e) => {
        const { name,value } = e.target;
        this.setState({
            [name]: value,
        });
    };
    handleSubmit = e =>{
        e.preventDefault();
        this.props.addItem(this.state.todoText)
        this.setState({
            todoText:'',
        });

    }



    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                 <label htmlFor="todo-input">Add Todo: </label>
                 <input 
                   id = 'todo-input'
                   name = 'todoText'
                   value= {this.stste.todoText}
                   onChange={this.handlechanges}/>
                 <button>Add Todo</button>

            </form>
        )
    }
}