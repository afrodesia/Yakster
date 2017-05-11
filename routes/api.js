const express = require('express')
const router = express.Router()
// const ZoneController = require('../controllers/ZoneController')
const controllers = require('../controllers')

// Main Resource payload

router.get('/:resource', function(req, res, next){

	const resource = req.params.resource
	const controller = controllers[resource]

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

	const resource = req.params.resource
	const id = req.params.id

	const controller = controllers[resource]

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
	const resource = req.params.resource
	const controller = controllers[resource]

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