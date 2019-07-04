import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private cookieValue: string;
  constructor(private cookieService: CookieService) {}

  public ngOnInit(): void {
    this.cookieService.set('cookie-name', 'our cookie value');
    this.cookieValue = this.cookieService.get('cookie-name');

  }

  title = 'Todo list';
  todos = [
    { 
    label: 'Example', 
    done: true, 
    priority: 2
    }
    
      
  ];

  addTodo(newTodoLabel) {
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);

    this.cookieService.set("newTodo.value", "newTodo.value");
    this.cookieService.get("newTodo.value");
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.label !== todo.label );

    this.cookieService.set("newTodo.value", "newTodo.value");
    this.cookieService.get("newTodo.value");
  }
}
