const express = require('express');

const toDoLists = [
  { id: "1", item: "Ganesh Lad" },
  { id: "2", item: "Drupal Developer" },
  { id: "3", item: "MERN Stack Developer" },
  { id: "4", item: "ABC Technologies" }
];

const router = express.Router();

/**
 * Method: GET
 * URL: /todolists
 * Description: To get all to-do lists
 * Access: Public
 * Parameters: None
 */
router.get('/', (req, res) => {
  res.status(200).json(toDoLists);
});

/**
 * Method: POST
 * URL: /todolists
 * Description: To add a new to-do list
 * Access: Public
 * Parameters: None
 */
router.post('/', (req, res) => {
  const newToDo = req.body.item;
  toDoLists.push(newToDo);
  res.status(201).json({
    data: toDoLists,
    status: 'Success',
    message: 'New to-do-list added successfully!!!!'
  });
});

/**
 * Method: PUT
 * URL: /todolists/:id
 * Description: To update a to-do list
 * Access: Public
 * Parameters: id
 */
router.put('/:id', (req, res) => {
  const id = req.params.id;

  const index = toDoLists.findIndex((each) => each.id == id);

  if (index === -1) {
    return res.status(404).json({
      message: `Item not found ${index}`
    });
  }

  const updatedToDo = req.body.item;

  toDoLists[index].item = updatedToDo;

  res.status(200).json({
    data: toDoLists,
    status: 'Success',
    message: 'To-do-list updated successfully!!!!'
  });
});


/**
 * Method: DELETE
 * URL: /todolists/:id
 * Description: To delete a to-do list
 * Access: Public
 * Parameters: id
 */
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  const index = toDoLists.findIndex((each) => each.id == id);

  if (index === -1) {
    return res.status(404).json({
      message: `Item not found ${index}`
    });
  }

  toDoLists.splice(index, 1);

  res.status(200).json({
    data: toDoLists,
    status: 'Success',
    message: 'To-do-list deleted successfully!!!!'
  });
});

module.exports = router;
