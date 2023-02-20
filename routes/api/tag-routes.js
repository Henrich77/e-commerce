const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include:[{model:Product}]
  }).then((tags) => {
    res.json(tags);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id,{
    include:[{model:Product}]
  
}).then((product) => {
  res.json(product);
});


});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((newTags) => {
    res.json(newTags);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTags) => {
      res.json(updatedTags);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tagsDeleted) => {
      res.json(tagsDeleted);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
