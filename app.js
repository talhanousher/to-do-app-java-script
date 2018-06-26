var todoTitle = document.getElementById('todoTitle');
var todoDetails = document.getElementById('todoDetails');
var todos = [];
var todoId = 0;
var alert = document.getElementById('alert');
alert.style.display = 'none';
var todoList = document.getElementById('todoList');
var todoListTitle = document.getElementById('todoListTitle');
todoListTitle.style.display = 'none';
function addTodo() {
    // console.log(todoTitle.value);
    // console.log(todoDetails.value);

    if (todoTitle.value === '') {
        alert.style.display = 'block';
        alert.innerHTML = 'Please Add Title'
        setTimeout(function () {
            alert.style.display = 'none';
        }, 3000);
    } else {
        if (todoDetails.value === '') {
            alert.style.display = 'block';
            alert.innerHTML = 'Please Add Details';
            setTimeout(function () {
                alert.style.display = 'none';
            }, 3000);
        } else {
            var todo = {
                title: todoTitle.value,
                details: todoDetails.value,
                id: todoId,
            }
            todos.push(todo);
            todoId++;
            todoListTitle.style.display = 'initial';
            displayOnDOM(todos);
            // todoListTitle.style.display = 'initial';
            // var card = document.createElement('div');
            // card.addEventListener('mouseover', function () {
            //     card.style.backgroundColor = 'rgb(224, 227, 233)';
            // });
            // card.addEventListener('mouseout', function () {
            //     card.style.backgroundColor = 'white';
            // })
            // card.addEventListener('click', function () {
            //     console.log(todoId);
            // })
            // card.setAttribute('class', 'card');
            // var cardBody = document.createElement('div');
            // cardBody.setAttribute('class', 'card-body');
            // var cardTitle = document.createElement('h5');
            // var cardTitleText = document.createTextNode(todoTitle.value);
            // cardTitle.appendChild(cardTitleText);
            // cardBody.appendChild(cardTitle);
            // card.appendChild(cardBody);
            // todoList.appendChild(card);
            // todoTitle.value = '';
            // todoDetails.value = '';
        }
    }
}


function displayOnDOM(todos) {
    // console.log(todos);
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    for (var i = 0; i < todos.length; i++) {
        var card = document.createElement('div');
        card.addEventListener('click', myfunc);
        card.myParam = todos[i].id;
        card.setAttribute('class', 'card');
        var cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
        var cardTitle = document.createElement('h5');
        var cardTitleText = document.createTextNode(todos[i].title);
        cardTitle.appendChild(cardTitleText);
        cardBody.appendChild(cardTitle);
        card.appendChild(cardBody);
        todoList.appendChild(card);
        todoTitle.value = '';
        todoDetails.value = '';
    }

}

function myfunc(ev) {
    console.log(ev.target);
}