const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // Get all categoties
  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id,{
    attributes:{
      include:['product']
    }
  }).then((categoryData) => {
    res.json(categoryData);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((categoryUpdate) => {
      res.json(categoryUpdate);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((categoryDeleted) => {
      res.json(categoryDeleted);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
