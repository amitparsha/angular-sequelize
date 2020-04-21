# sequelize Design Patterns
Sequelize Assignment:

1. Singleton Pattern:  Used to create the instance of connection object which is instantiated only once.
                       Used in the sync of all models into tables.
                       Used in various places where dependency injection needed as to instantiate  only one instance and if                            called again then returning the previous instance.
2. Factory Pattern:    Used in the creation of all models which follows the factory of all models in models folder. and then                          attaching with sequelize in differnt class which 
                       is responsible for sync the models and storing the refernce of models.
                       And also having relationships folder where can create having the different classes(as follows factory of                        relationship) to define associations between
                       different models.
                       then having one class which is responsible for giving the refernce of particuler model.
3. DRY principle:      it follows the DRY principle.
4. Avoid use New keyword: Avoid the use of new Keyword as having static method getInstance which follows single instance                                principle.
5. Facade Pattern:     It hides the complexity and provide the methods which is useful for getting models etc.
