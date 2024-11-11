
   class Activity {
     constructor(id, title, description, imgURL) {
         this.id = id;
         this.title = title;
         this.description = description;
         this.imgURL = imgURL;
     }
   }

   class Repository {
     constructor() {
         this.activities = [];
         this.currentId = 1;
     }

     createActivity(title, description, imgUrl) {
         const newActivity = new Activity(
             this.currentId,
             title,
             description,
             imgUrl
         )
         this.activities.push(newActivity);

         this.currentId++;
     }

   getAllActivities() {
     return this.activities;
   }
   }

   let repository
   let id

   const expectedActivity = {
     title: "Hacer yoga",
     description: "Entrenamiento fisico y mental",
   imgURL: "http://www.someurl.com/yoga.jpg"
 }

 const expectedActivity2 = {
   title: "Pasear",
   description: "caminar por ahi",
   imgURL: "http://www.someurl.com/pasear.jpg"
 }

 describe("clase repository", () => {

   beforeEach(() => {
     repository = new Repository()
   })

   it("la variable repository deberia ser una instancia de la clase Repository", () => {
     expect(repository instanceof Repository).toBe(true)
   })
   it("deberia tener un metodo createActivity para agregar un elemento a la lista", () => {
     expect(typeof repository.createActivity).toBe("function")
   })
   it("el metodo createActivity deberia poder agregar un elemento", () => {
     repository.createActivity(
       expectedActivity.title,
       expectedActivity.description,
       expectedActivity.imgURL
     )

     expect(repository.getAllActivities().length).toBeGreaterThan(0)
   })
   it("el metodo getAllActivities deberia retornar la lista de actividades", () => {
     repository.createActivity(
       expectedActivity.title,
       expectedActivity.description,
       expectedActivity.imgURL
     )
     repository.createActivity(
       expectedActivity2.title,
       expectedActivity2.description,
       expectedActivity2.imgURL
     )

     const newActivity = new Activity(
       (id = 1),
       expectedActivity.title,
       expectedActivity.description,
       expectedActivity.imgURL
     )
     const newActivity2 = new Activity(
       (id = 2),
       expectedActivity2.title,
       expectedActivity2.description,
       expectedActivity2.imgURL
     )

     expect(repository.getAllActivities()).toEqual([newActivity, newActivity2])
   })
 })

