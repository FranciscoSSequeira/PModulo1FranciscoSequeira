describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});

describe("Este es mi primer grupo de tests", () => {
  it("El numero 2 tiene que ser igual al numero 2", () => {
    expect(2).toEqual(2);
  });
});

const sumar = (a,b) => a + b;

describe("la funcion sumar", () => {
  it("Debe estar definida", () => {
    expect(sumar).toBeDefined();
  });
  it("Debe sumar dos numeros enviados como argumentos", () => {
    expect(sumar(2,2)).toBe(4);
    expect(sumar(4,4)).toBe(8);
    expect(sumar(5,0)).toBe(5);
  });
});

describe("una prueba con objetos", () => {
  it("espero que los numeros sean iguales", () => {
    expect(5).toBe(5);
    expect(10).toBe(10);
  })
  it("yo espero que dos palabras iguales sean iguales", () => {
    expect("jorge").toBe("jorge");
  } );
  it("espero que dos objetos iguales sean iguales", () => {
    //objetos no tienen igualdad como pasa con los valores. para los arrays se usa toEqual
    expect({ nombre: "jorge"}).toEqual({ nombre: "jorge"});
  });
  
})

const filtrar = (arr) => arr.filter((num) => num % 2 == 0);

describe("la funcion filtrar", () => {
  it("debe estar definida", () => {
    expect(filtrar).toBeDefined();
  });

  it("debe retornar un array", () => {
    expect(Array.isArray(filtrar([1,2,3,4,5,6]))).toBe(true);
  })
  it("debe retornar un array con los numeros pares", () => {
    expect(filtrar([1,2,3,4])).toEqual([2,4]);
    expect(filtrar([2,4,6]).toEqual([2,4,6]));
    expect(filtrar([1,3,5,7,9])).toEqual([]);
    expect(filtrar([])).toEqual([]);
  })
});

//************************** */
// actividad clase test 

// toDoList
// debe ser una clase
// debe tener los metodos:
//        -getTodos(): debe retornar la lista de tareas
//        - addTodo(): deberia pushear al array una tarea nueva
//        -deleteTodo(): deberia eliminar la ultima tarea

describe("la clase toDoList", () => {
  it("debe ser una clase", () => {
    expect(typeof ToDoList.prototype.constructor).toBe("function");
  });
  it("debe tener implementado el metodo getTodos()", () => {
    const lista = new ToDoList();
    expect(lista.addTodo).toBeDefined();
  });
  it("debe tener implementado el metodo addTodo()", () => {
    const lista = new ToDoList();
    expect(lista.addTodo).toBeDefined();
  });
  it("debe tener implementado el metodo deleteTodo()", () => {
    const lista = new ToDoList();
    expect(lista.addTodo).toBeDefined();
  });

  it("el metodo getTodos() debe retornar un array", () => {
    const lista = new ToDoList();
    expect(Array.isArray(lista.getTodos())).toBeTrue();
  })
  
  
})
