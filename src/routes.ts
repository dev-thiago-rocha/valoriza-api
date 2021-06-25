import { Router } from 'express'
import {
  AuthenticateUserController,
  CreateTagController,
  CreateUserController,
  CreateComplimentController,
  ListComplimentUserSenderController,
  ListComplimentUserReceiverController,
  ListTagController,
  ListUserController,
} from './controller'
import { ensureAdmin, ensureAuthenticated } from './middleware'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const listTagController = new ListTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listComplimentUserSenderController = new ListComplimentUserSenderController()
const listComplimentUserReceiverController = new ListComplimentUserReceiverController()
const listUserController = new ListUserController()

router.post('/users', createUserController.handle)
router.get('/users', ensureAuthenticated, listUserController.handle)
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle)
router.get('/tags', ensureAuthenticated, listTagController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', ensureAuthenticated, createComplimentController.handle)
router.get('/compliments/user/send', ensureAuthenticated, listComplimentUserSenderController.handle)
router.get(
  '/compliments/user/receiver',
  ensureAuthenticated,
  listComplimentUserReceiverController.handle
)

export { router }
