var express = require('express')
var router = express.Router()
// var ZoneController = require('../controllers/ZoneController')
var controllers = require('../controllers')

// Main Resource payload

router.get('/:resource', function(req, res, next){

	var resource = req.params.resource
	var controller = controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'Fail',
			message: 'Invaild Resource Payload Request: '+resource
		})
		return
	} 

	controller.find(req.query, function(err,results){
		if(err){
				res.json({
					confirmation: 'Fail',
					message: err
				})
				return
			}
			res.json({
				confirmation: 'Success',
				results: results
		})
	})
})

// Resource findById payload 

router.get('/:resource/:id', function(req, res, next){

	var resource = req.params.resource
	var id = req.params.id

	var controller = controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'Fail',
			message: 'Invaild Resource Payload Request: '+resource
		})
		return
	} 
	controller.findById(id, function(err, result){
		if(err){
			res.json({
			confirmation: 'Fail',
			message: 'Not Found'
		})
		return
		}
		res.json({
			confirmation: 'Success',
			result: result
		})	
	})
})

// Create method for payload

router.post('/:resource', function(req, res, next){
	var resource = req.params.resource
	var controller = controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'Fail',
			message: 'Invaild Resource Payload Request: '+resource
		})
		return
	}
	controller.create(req.body, function(err, result){
		if(err){
				res.json({
					confirmation: 'Fail',
					message: err
				})
				return
			}
			res.json({
				confirmation: 'Success',
				result: result 
			})	
	})
	
})

module.exports = router