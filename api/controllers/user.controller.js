// Mockup controller for Users

// Create and Save a new User (Mockup)
exports.create = (req, res) => {
    const user = {
      id: Math.floor(Math.random() * 1000), // Generate a random user ID
      name: req.body.name || "John Doe", // Default name if none is provided
      email: req.body.email || "johndoe@example.com", // Default email if none is provided
    };
  
    res.status(201).send({
      message: "User created successfully!",
      user: user
    });
  };
  
  // Retrieve all Users (Mockup)
  exports.findAll = (req, res) => {
    const users = [
      { id: 1, name: "John Doe", email: "johndoe@example.com" },
      { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
      { id: 3, name: "Alice Johnson", email: "alicej@example.com" },
    ];
  
    res.status(200).send(users);
  };
  
  // Retrieve a single User by ID (Mockup)
  exports.findOne = (req, res) => {
    const id = req.params.id;
    
    const user = { id: id, name: "John Doe", email: "johndoe@example.com" };
  
    if (parseInt(id) > 0 && parseInt(id) < 1000) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ message: `User with id=${id} not found.` });
    }
  };
  
  // Update a User by ID (Mockup)
  exports.update = (req, res) => {
    const id = req.params.id;
    const updatedUser = {
      id: id,
      name: req.body.name || "Updated User",
      email: req.body.email || "updated@example.com"
    };
  
    res.status(200).send({
      message: `User with id=${id} updated successfully!`,
      user: updatedUser
    });
  };
  
  // Delete a User by ID (Mockup)
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    if (parseInt(id) > 0 && parseInt(id) < 1000) {
      res.status(200).send({
        message: `User with id=${id} was deleted successfully!`
      });
    } else {
      res.status(404).send({
        message: `Cannot delete User with id=${id}. User not found.`
      });
    }
  };
  
  // Delete all Users (Mockup)
  exports.deleteAll = (req, res) => {
    res.status(200).send({
      message: "All users were deleted successfully!"
    });
  };
  