let books = [];
let id = 0;

module.exports = {
  create: function( req, res ){
    books.push({
      "title": req.body.title,
      "author": req.body.author,
      "id": id++
    })
    res.status(200).send(books);
  },
  read: function( req, res ){
    res.status(200).send( books );
  },
  delete: function( req, res ){
    let deleteID = req.params.id;

    bookID = books.findIndex( book => book.id == deleteID );
    books.splice ( bookID, 1 );

    res.status(200).send(books);
  },
  update: function( req, res ){
    let updateID = req.params.id;

    let index = books.findIndex( book => book.id == updateID );

    books[index] = {
      id: books[index].id,
      title: req.body.title || books[ index ].title,
      author: req.body.author || books[index].author
    };

    res.status(200).send(books);
  }
}