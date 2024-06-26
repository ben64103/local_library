const BookInstance = require('../models/bookInstance');
const asyncHandler = require('express-async-handler');

// Display list of all Authors.
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  // res.send('NOT IMPLEMENTED: BookInstance list');
  const allBookInstances = await BookInstance.find().populate('book').exec();
  res.render('bookinstance_list', {
    title: 'Book Instance List',
    bookinstance_list: allBookInstances,
  });
});

// Display detail page for a specific Author.
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance create GET');
});

// Handle BookInstance create on POST.
exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance create POST');
});

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance delete GET');
});

// Handle BookInstance delete on POST
exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance delete POST');
});

// Display BookInstance update form on GET.
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance update GET');
});

// Handle BookInstance update on POST.
exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance update POST');
});
