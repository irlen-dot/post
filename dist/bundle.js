/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 588:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostResolver = void 0;
const type_graphql_1 = __webpack_require__(885);
const ObjectPost_1 = __webpack_require__(160);
const ArgsPost_1 = __webpack_require__(342);
const InputPost_1 = __webpack_require__(108);
const typeorm_1 = __webpack_require__(794);
let PostResolver = class PostResolver {
    HelloBitch() {
        return __awaiter(this, void 0, void 0, function* () {
            return "HiBitch";
        });
    }
    createPostByArgs(allArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const returnPost = new ObjectPost_1.PostObjectType();
            returnPost.description = allArgs.description;
            returnPost.comments = allArgs.comments;
            returnPost.likes = allArgs.likes;
            returnPost.isActive = allArgs.isActive;
            const postRep = yield typeorm_1.getRepository(ObjectPost_1.PostObjectType);
            postRep.save(returnPost);
            return returnPost;
        });
    }
    saas(singleParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            const returnPost = new ObjectPost_1.PostObjectType();
            returnPost.description = singleParametr.description;
            returnPost.comments = singleParametr.comments;
            returnPost.likes = singleParametr.likes;
            returnPost.id = singleParametr.id;
            returnPost.isActive = singleParametr.isActive;
            const postRep = yield typeorm_1.getRepository(ObjectPost_1.PostObjectType);
            postRep.save(returnPost);
            return returnPost;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "HelloBitch", null);
__decorate([
    type_graphql_1.Mutation(() => ObjectPost_1.PostObjectType, { name: 'createPostByArgs' }),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ArgsPost_1.CreatePostArgs]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPostByArgs", null);
__decorate([
    type_graphql_1.Mutation(() => ObjectPost_1.PostObjectType, { name: "createPostByInput" }),
    __param(0, type_graphql_1.Arg('ingleParametr')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InputPost_1.CreatePostInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "saas", null);
PostResolver = __decorate([
    type_graphql_1.Resolver()
], PostResolver);
exports.PostResolver = PostResolver;


/***/ }),

/***/ 604:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserResolver = void 0;
const bcryptjs_1 = __importDefault(__webpack_require__(773));
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
const inputUser_1 = __webpack_require__(381);
const user_1 = __webpack_require__(171);
let UserResolver = class UserResolver {
    HelloBitch() {
        return __awaiter(this, void 0, void 0, function* () {
            return "HiBitch";
        });
    }
    register(singleParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            const returnUser = new user_1.User();
            returnUser.firstName = singleParametr.firstName;
            returnUser.lastName = singleParametr.lastName;
            returnUser.email = singleParametr.email;
            returnUser.password = yield bcryptjs_1.default.hash(singleParametr.password, 12);
            returnUser.username = singleParametr.username;
            const userRep = yield typeorm_1.getRepository(user_1.User);
            userRep.save(returnUser);
            return returnUser;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "HelloBitch", null);
__decorate([
    type_graphql_1.Mutation(() => user_1.User),
    __param(0, type_graphql_1.Arg("UserData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputUser_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;


/***/ }),

/***/ 171:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column("text", { unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
User = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], User);
exports.User = User;


/***/ }),

/***/ 342:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePostArgs = void 0;
const type_graphql_1 = __webpack_require__(885);
let CreatePostArgs = class CreatePostArgs {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CreatePostArgs.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreatePostArgs.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CreatePostArgs.prototype, "comments", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CreatePostArgs.prototype, "likes", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], CreatePostArgs.prototype, "ownerId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], CreatePostArgs.prototype, "isActive", void 0);
CreatePostArgs = __decorate([
    type_graphql_1.ArgsType()
], CreatePostArgs);
exports.CreatePostArgs = CreatePostArgs;


/***/ }),

/***/ 160:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostObjectType = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
let PostObjectType = class PostObjectType extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostObjectType.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: "text" }),
    __metadata("design:type", String)
], PostObjectType.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PostObjectType.prototype, "comments", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PostObjectType.prototype, "likes", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], PostObjectType.prototype, "isActive", void 0);
PostObjectType = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], PostObjectType);
exports.PostObjectType = PostObjectType;


/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(906);
const type_graphql_1 = __webpack_require__(885);
const ResolvePost_1 = __webpack_require__(588);
const apollo_server_1 = __webpack_require__(232);
const typeorm_1 = __webpack_require__(794);
const ObjectPost_1 = __webpack_require__(160);
const ResolveUser_1 = __webpack_require__(604);
const user_1 = __webpack_require__(171);
const express_1 = __importDefault(__webpack_require__(127));
const PORT = process.env.PORT || 4040;
function Bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const connectionPost = yield typeorm_1.createConnection({
            "name": "default",
            "type": "postgres",
            "host": "localhost",
            "port": 5432,
            "username": "irlenturlykhanov",
            "password": "1234",
            "database": "posts",
            "synchronize": true,
            "logging": true,
            "entities": [ObjectPost_1.PostObjectType, user_1.User]
        });
        const app = express_1.default();
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [ResolvePost_1.PostResolver, ResolveUser_1.UserResolver],
        });
        const production = "production" === "production";
        const server = new apollo_server_1.ApolloServer({
            schema: schema,
            playground: true,
            context: ({ req }) => ({ req })
        });
        app.listen(PORT, () => {
            console.log("Server started, bitch");
        });
    });
}
Bootstrap();


/***/ }),

/***/ 108:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePostInput = void 0;
const type_graphql_1 = __webpack_require__(885);
let CreatePostInput = class CreatePostInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CreatePostInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], CreatePostInput.prototype, "comments", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CreatePostInput.prototype, "likes", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CreatePostInput.prototype, "ownerId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], CreatePostInput.prototype, "isActive", void 0);
CreatePostInput = __decorate([
    type_graphql_1.InputType()
], CreatePostInput);
exports.CreatePostInput = CreatePostInput;


/***/ }),

/***/ 381:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserInput = void 0;
const class_validator_1 = __webpack_require__(516);
const type_graphql_1 = __webpack_require__(885);
const validateEmail_1 = __webpack_require__(686);
const validateUsername_1 = __webpack_require__(274);
let UserInput = class UserInput {
};
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], UserInput.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], UserInput.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.IsEmail(),
    validateEmail_1.IsEmailAlreadyExist({ message: "email is already in use" }),
    __metadata("design:type", String)
], UserInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInput.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    validateUsername_1.IsUsernameAlreadyExist({ message: "username is already in use" }),
    __metadata("design:type", String)
], UserInput.prototype, "username", void 0);
UserInput = __decorate([
    type_graphql_1.InputType()
], UserInput);
exports.UserInput = UserInput;


/***/ }),

/***/ 686:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsEmailAlreadyExist = exports.IsEmailAlreadyExistConstraint = void 0;
const class_validator_1 = __webpack_require__(516);
const user_1 = __webpack_require__(171);
let IsEmailAlreadyExistConstraint = class IsEmailAlreadyExistConstraint {
    validate(email) {
        return user_1.User.findOne({ where: { email } }).then(user => {
            if (user)
                return false;
            return true;
        });
    }
};
IsEmailAlreadyExistConstraint = __decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsEmailAlreadyExistConstraint);
exports.IsEmailAlreadyExistConstraint = IsEmailAlreadyExistConstraint;
function IsEmailAlreadyExist(validateOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validateOptions,
            constraints: [],
            validator: IsEmailAlreadyExistConstraint
        });
    };
}
exports.IsEmailAlreadyExist = IsEmailAlreadyExist;


/***/ }),

/***/ 274:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsUsernameAlreadyExist = exports.IsUsernameAlreadyExistConstraint = void 0;
const class_validator_1 = __webpack_require__(516);
const user_1 = __webpack_require__(171);
let IsUsernameAlreadyExistConstraint = class IsUsernameAlreadyExistConstraint {
    validate(username) {
        return user_1.User.findOne({ where: { username } }).then(user => {
            if (user)
                return false;
            return true;
        });
    }
};
IsUsernameAlreadyExistConstraint = __decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsUsernameAlreadyExistConstraint);
exports.IsUsernameAlreadyExistConstraint = IsUsernameAlreadyExistConstraint;
function IsUsernameAlreadyExist(validateOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validateOptions,
            constraints: [],
            validator: IsUsernameAlreadyExistConstraint
        });
    };
}
exports.IsUsernameAlreadyExist = IsUsernameAlreadyExist;


/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("apollo-server");;

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("bcryptjs");;

/***/ }),

/***/ 516:
/***/ ((module) => {

module.exports = require("class-validator");;

/***/ }),

/***/ 127:
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ 906:
/***/ ((module) => {

module.exports = require("reflect-metadata");;

/***/ }),

/***/ 885:
/***/ ((module) => {

module.exports = require("type-graphql");;

/***/ }),

/***/ 794:
/***/ ((module) => {

module.exports = require("typeorm");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(607);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9Qb3N0U2hpdC9SZXNvbHZlUG9zdC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9Qb3N0U2hpdC9SZXNvbHZlVXNlci50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9Vc2VyL3VzZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvYXJnc1R5cGUvQXJnc1Bvc3QudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvZW50aXR5L09iamVjdFBvc3QudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvaW5wdXRUeXBlL0lucHV0UG9zdC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9pbnB1dFR5cGUvaW5wdXRVc2VyLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3ZhbGlkYXRlL3ZhbGlkYXRlRW1haWwudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdmFsaWRhdGUvdmFsaWRhdGVVc2VybmFtZS50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImJjcnlwdGpzXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJjbGFzcy12YWxpZGF0b3JcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcInJlZmxlY3QtbWV0YWRhdGFcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcInR5cGUtZ3JhcGhxbFwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwidHlwZW9ybVwiIiwid2VicGFjazovL2NvcHlzaGl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvcHlzaGl0L3dlYnBhY2svc3Rh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LDRFQUFnQztBQVU3QyxTQUFnQixzQkFBc0IsQ0FBQyxlQUFtQztJQUN0RSxPQUFPLFVBQVMsTUFBYyxFQUFFLFlBQW9CO1FBQ2hELG1DQUFpQixDQUFDO1lBQ2QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO1lBQzFCLFlBQVksRUFBRSxZQUFZO1lBQzFCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsU0FBUyxFQUFFLGdDQUFnQztTQUM5QyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDO0FBVkQsd0RBVUM7Ozs7Ozs7O0FDMUJELDJDOzs7Ozs7O0FDQUEsc0M7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLHFDOzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7QUNBQSwwQzs7Ozs7OztBQ0FBLHFDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFyZywgQXJncywgTXV0YXRpb24sIFF1ZXJ5LCBSZXNvbHZlciB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IFBvc3RPYmplY3RUeXBlICB9IGZyb20gXCIuLi9lbnRpdHkvT2JqZWN0UG9zdFwiO1xuaW1wb3J0IHsgQ3JlYXRlUG9zdEFyZ3MgfSBmcm9tIFwiLi4vYXJnc1R5cGUvQXJnc1Bvc3RcIjtcbmltcG9ydCB7IENyZWF0ZVBvc3RJbnB1dCB9IGZyb20gXCIuLi9pbnB1dFR5cGUvSW5wdXRQb3N0XCI7XG5pbXBvcnQgeyBnZXRSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcblxuQFJlc29sdmVyKClcbmV4cG9ydCBjbGFzcyBQb3N0UmVzb2x2ZXIge1xuICAgIEBRdWVyeSgoKSA9PiBTdHJpbmcpXG4gICAgYXN5bmMgSGVsbG9CaXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiSGlCaXRjaFwiO1xuICAgIH1cblxuICAgIEBNdXRhdGlvbigoKSA9PiBQb3N0T2JqZWN0VHlwZSwgeyBuYW1lOiAnY3JlYXRlUG9zdEJ5QXJncycgfSlcbiAgICBhc3luYyBjcmVhdGVQb3N0QnlBcmdzKFxuICAgICAgICBAQXJncygpIGFsbEFyZ3M6IENyZWF0ZVBvc3RBcmdzXG4gICAgKTogUHJvbWlzZTxQb3N0T2JqZWN0VHlwZSB8IHZvaWQ+IHsgLy8gdm9pZCByZXR1cm5zIFwidW5kZWZpbmVkXCJcbiAgICAgICAgY29uc3QgcmV0dXJuUG9zdCA9IG5ldyBQb3N0T2JqZWN0VHlwZSgpO1xuICAgICAgICByZXR1cm5Qb3N0LmRlc2NyaXB0aW9uID0gYWxsQXJncy5kZXNjcmlwdGlvbjtcbiAgICAgICAgXG4gICAgICAgIHJldHVyblBvc3QuY29tbWVudHMgPSBhbGxBcmdzLmNvbW1lbnRzO1xuICAgICAgICByZXR1cm5Qb3N0Lmxpa2VzID0gYWxsQXJncy5saWtlcztcbiAgICAgICAgLy8gcmV0dXJuUG9zdC5pZCA9IGFsbEFyZ3MuaWQ7XG4gICAgICAgIHJldHVyblBvc3QuaXNBY3RpdmUgPSBhbGxBcmdzLmlzQWN0aXZlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcG9zdFJlcCA9IGF3YWl0IGdldFJlcG9zaXRvcnkoUG9zdE9iamVjdFR5cGUpO1xuICAgICAgICBwb3N0UmVwLnNhdmUocmV0dXJuUG9zdCk7XG4gICAgICAgIHJldHVybiByZXR1cm5Qb3N0O1xuICAgIH1cblxuICAgIEBNdXRhdGlvbigoKSA9PiBQb3N0T2JqZWN0VHlwZSwgeyBuYW1lOiBcImNyZWF0ZVBvc3RCeUlucHV0XCIgfSlcbiAgICBhc3luYyBzYWFzKFxuICAgICAgICBAQXJnKCdpbmdsZVBhcmFtZXRyJykgc2luZ2xlUGFyYW1ldHI6IENyZWF0ZVBvc3RJbnB1dFxuICAgICk6IFByb21pc2U8UG9zdE9iamVjdFR5cGUgfCB2b2lkPiB7XG4gICAgICAgIGNvbnN0IHJldHVyblBvc3QgPSBuZXcgUG9zdE9iamVjdFR5cGUoKTtcbiAgICAgICAgcmV0dXJuUG9zdC5kZXNjcmlwdGlvbiA9IHNpbmdsZVBhcmFtZXRyLmRlc2NyaXB0aW9uO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuUG9zdC5jb21tZW50cyA9IHNpbmdsZVBhcmFtZXRyLmNvbW1lbnRzO1xuICAgICAgICByZXR1cm5Qb3N0Lmxpa2VzID0gc2luZ2xlUGFyYW1ldHIubGlrZXM7XG4gICAgICAgIHJldHVyblBvc3QuaWQgPSBzaW5nbGVQYXJhbWV0ci5pZDtcbiAgICAgICAgcmV0dXJuUG9zdC5pc0FjdGl2ZSA9IHNpbmdsZVBhcmFtZXRyLmlzQWN0aXZlO1xuXG4gICAgICAgIGNvbnN0IHBvc3RSZXAgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFBvc3RPYmplY3RUeXBlKTtcbiAgICAgICAgcG9zdFJlcC5zYXZlKHJldHVyblBvc3QpO1xuICAgICAgICByZXR1cm4gcmV0dXJuUG9zdDtcbiAgICB9XG5cblxufSIsImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBBcmcsIEN0eCwgTXV0YXRpb24sIFF1ZXJ5LCBSZXNvbHZlciB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IGdldFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgTXlDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvTXlDb250ZXh0XCI7XG5pbXBvcnQgeyBVc2VySW5wdXQgfSBmcm9tIFwiLi4vaW5wdXRUeXBlL2lucHV0VXNlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL3VzZXJcIjtcblxuXG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmVyIHtcbiAgICBAUXVlcnkoKCkgPT4gU3RyaW5nKVxuICAgIGFzeW5jIEhlbGxvQml0Y2goKSB7XG4gICAgICAgIHJldHVybiBcIkhpQml0Y2hcIjtcbiAgICB9XG5cbiAgICAvLyBATXV0YXRpb24oKCkgPT4gVXNlcilcbiAgICAvLyBhc3luYyByZWdpc3RlcihAQXJnKFwiZGF0YVwiKSBTaW5nbGVQYXJhbWV0cjogVXNlcklucHV0KTogUHJvbWlzZTxVc2VyIHwgYW55PiB7XG4gICAgLy8gICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goU2luZ2xlUGFyYW1ldHIucGFzc3dvcmQsIDEyKVxuXG4gICAgLy8gICAgIGNvbnN0IFVzZXJuYW1lID0gYCR7U2luZ2xlUGFyYW1ldHIuZmlyc3ROYW1lfSAuICR7U2luZ2xlUGFyYW1ldHIubGFzdE5hbWV9YFxuXG4gICAgLy8gICAgIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgLy8gICAgIC8vICAgICBmaXJzdE5hbWUsXG4gICAgLy8gICAgIC8vICAgICBsYXN0TmFtZSxcbiAgICAvLyAgICAgLy8gICAgIGVtYWlsLFxuICAgIC8vICAgICAvLyAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgIC8vICAgICAvLyAgICAgdXNlcm5hbWU6IFVzZXJuYW1lXG4gICAgLy8gICAgIC8vIH0pLnNhdmUoKTtcblxuICAgIC8vICAgICBjb25zdCB1c2VyUmVwID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShVc2VyKTtcbiAgICAvLyAgICAgdXNlclJlcC5zYXZlKHtTaW5nbGVQYXJhbWV0ci5maXJzdE5hbWUsIH0pXG5cbiAgICAvLyAgICAgcmV0dXJuIHVzZXI7XG4gICAgLy8gfVxuXG4gICAgQE11dGF0aW9uKCgpID0+IFVzZXIpXG4gICAgYXN5bmMgcmVnaXN0ZXIoQEFyZyhcIlVzZXJEYXRhXCIpIHNpbmdsZVBhcmFtZXRyOiBVc2VySW5wdXQpOiBQcm9taXNlPFVzZXIgfCB2b2lkPiB7XG4gICAgICAgIGNvbnN0IHJldHVyblVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICByZXR1cm5Vc2VyLmZpcnN0TmFtZSA9IHNpbmdsZVBhcmFtZXRyLmZpcnN0TmFtZTtcbiAgICAgICAgcmV0dXJuVXNlci5sYXN0TmFtZSA9IHNpbmdsZVBhcmFtZXRyLmxhc3ROYW1lO1xuICAgICAgICByZXR1cm5Vc2VyLmVtYWlsID0gc2luZ2xlUGFyYW1ldHIuZW1haWw7XG4gICAgICAgIC8vIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYmNyeXB0Lmhhc2goc2luZ2xlUGFyYW1ldHIucGFzc3dvcmQsIDEyKVxuICAgICAgICByZXR1cm5Vc2VyLnBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goc2luZ2xlUGFyYW1ldHIucGFzc3dvcmQsIDEyKTtcbiAgICAgICAgcmV0dXJuVXNlci51c2VybmFtZSA9IHNpbmdsZVBhcmFtZXRyLnVzZXJuYW1lO1xuICAgICAgICBjb25zdCB1c2VyUmVwID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShVc2VyKTtcbiAgICAgICAgdXNlclJlcC5zYXZlKHJldHVyblVzZXIpO1xuICAgICAgICByZXR1cm4gcmV0dXJuVXNlcjtcbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHsgRmllbGQsIElELCBPYmplY3RUeXBlLCBSb290IH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgQmFzZUVudGl0eSwgQ29sdW1uLCBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuXG5cbkBFbnRpdHkoKVxuQE9iamVjdFR5cGUoKVxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcblxuICAgIEBGaWVsZCgoKSA9PiBJRClcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gICAgaWQhOiBudW1iZXI7XG5cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIGZpcnN0TmFtZSE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbigpXG4gICAgbGFzdE5hbWUhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oXCJ0ZXh0XCIsIHsgdW5pcXVlOiB0cnVlIH0pXG4gICAgZW1haWwhOiBzdHJpbmc7XG5cbiAgICAvLyBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIHBhc3N3b3JkITogc3RyaW5nO1xuXG4gICAgLy8gQEZpZWxkKClcbiAgICAvLyB1c2VybmFtZShAUm9vdCgpIHBhcmVudDogVXNlcik6IFN0cmluZyB7XG4gICAgLy8gICAgIHJldHVybiBgJHtwYXJlbnQuZmlyc3ROYW1lfSAuICR7cGFyZW50Lmxhc3ROYW1lfWBcbiAgICAvLyB9XG5cbiAgICBAQ29sdW1uKClcbiAgICB1c2VybmFtZSE6IHN0cmluZztcbn1cblxuIiwiLy8gaW1wb3J0IHsgaXNJbnB1dE9iamVjdFR5cGUgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuaW1wb3J0IHsgQXJnc1R5cGUsIEZpZWxkLCBJRCwgSW5wdXRUeXBlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuLy8gaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcblxuLy8gQEVudGl0eSgpXG5AQXJnc1R5cGUoKVxuZXhwb3J0IGNsYXNzIENyZWF0ZVBvc3RBcmdzIHtcbiAgICBARmllbGQoKVxuICAgIC8vIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgICBpZCE6IG51bWJlcjtcblxuICAgIEBGaWVsZCgpXG4gICAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIGNvbW1lbnRzPzogbnVtYmVyO1xuXG4gICAgQEZpZWxkKClcbiAgICBsaWtlcz86IG51bWJlcjtcblxuICAgIEBGaWVsZCh7IG51bGxhYmxlOiB0cnVlIH0pXG4gICAgb3duZXJJZD86IG51bWJlcjtcblxuICAgIEBGaWVsZCgpXG4gICAgaXNBY3RpdmUhOiBib29sZWFuO1xufVxuXG4iLCJpbXBvcnQgeyBPYmplY3RUeXBlLCBJRCwgRmllbGQgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBCYXNlRW50aXR5LCBDb2x1bW4sIEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG4gXG5ARW50aXR5KClcbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBQb3N0T2JqZWN0VHlwZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuICAgIEBGaWVsZCgoKSA9PiBJRClcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gICAgaWQhOiBudW1iZXI7XG4gXG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKHt0eXBlOiBcInRleHRcIn0pXG4gICAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG4gXG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKClcbiAgICBjb21tZW50cz86IG51bWJlcjtcbiBcbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIGxpa2VzPzogbnVtYmVyO1xuXG5cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIGlzQWN0aXZlITogYm9vbGVhbjtcbn0iLCJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgeyBidWlsZFNjaGVtYSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IFBvc3RSZXNvbHZlciB9IGZyb20gXCIuL1Bvc3RTaGl0L1Jlc29sdmVQb3N0XCI7XG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tIFwiYXBvbGxvLXNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBQb3N0T2JqZWN0VHlwZSB9IGZyb20gXCIuL2VudGl0eS9PYmplY3RQb3N0XCI7XG5pbXBvcnQgeyBVc2VyUmVzb2x2ZXIgfSBmcm9tIFwiLi9Qb3N0U2hpdC9SZXNvbHZlVXNlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL1VzZXIvdXNlclwiO1xuaW1wb3J0IEV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDA0MDtcblxuYXN5bmMgZnVuY3Rpb24gQm9vdHN0cmFwKCkge1xuXG4gICAgY29uc3QgY29ubmVjdGlvblBvc3QgPSBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKHtcbiAgICAgICAgXCJuYW1lXCI6IFwiZGVmYXVsdFwiLFxuICAgICAgICBcInR5cGVcIjogXCJwb3N0Z3Jlc1wiLFxuICAgICAgICBcImhvc3RcIjogXCJsb2NhbGhvc3RcIixcbiAgICAgICAgXCJwb3J0XCI6IDU0MzIsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJpcmxlbnR1cmx5a2hhbm92XCIsXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCIxMjM0XCIsXG4gICAgICAgIFwiZGF0YWJhc2VcIjogXCJwb3N0c1wiLFxuICAgICAgICBcInN5bmNocm9uaXplXCI6IHRydWUsXG4gICAgICAgIFwibG9nZ2luZ1wiOiB0cnVlLFxuICAgICAgICBcImVudGl0aWVzXCI6IFtQb3N0T2JqZWN0VHlwZSwgVXNlcl1cbiAgICB9KTtcblxuICAgIGNvbnN0IGFwcCA9IEV4cHJlc3MoKTtcblxuICAgIGNvbnN0IHNjaGVtYSA9IGF3YWl0IGJ1aWxkU2NoZW1hKHtcbiAgICAgICAgcmVzb2x2ZXJzOiBbUG9zdFJlc29sdmVyLCBVc2VyUmVzb2x2ZXJdLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuXG4gICAgY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwbGF5Z3JvdW5kOiB0cnVlLFxuICAgICAgICBjb250ZXh0OiAoeyByZXEgfTogYW55KSA9PiAoeyByZXEgfSlcbiAgICB9KTtcblxuICAgIGFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZlciBzdGFydGVkLCBiaXRjaFwiKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnN0IHNlcnZlckluZm8gPSBhd2FpdCBzZXJ2ZXIubGlzdGVuKFBPUlQpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiU0VSVkVFUiBTVEFSVEVEXCIpO1xufVxuXG5Cb290c3RyYXAoKSAiLCJpbXBvcnQgeyBGaWVsZCwgSW5wdXRUeXBlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuLy8gaW1wb3J0IHsgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbi8vIEBFbnRpdHkoKVxuQElucHV0VHlwZSgpXG5leHBvcnQgY2xhc3MgQ3JlYXRlUG9zdElucHV0IHtcbiAgICBARmllbGQoKVxuICAgIC8vIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgICBpZCE6IG51bWJlcjtcblxuICAgIEBGaWVsZCgpXG4gICAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG5cbiAgICBARmllbGQoe251bGxhYmxlOiB0cnVlfSlcbiAgICBjb21tZW50cz86IG51bWJlcjtcblxuICAgIEBGaWVsZCgpXG4gICAgbGlrZXM/OiBudW1iZXI7XG5cbiAgICBARmllbGQoKVxuICAgIG93bmVySWQhOiBudW1iZXI7XG5cbiAgICBARmllbGQoKVxuICAgIGlzQWN0aXZlITogYm9vbGVhbjtcbn0iLCJpbXBvcnQgeyBJc0VtYWlsLCBMZW5ndGggfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBGaWVsZCwgSW5wdXRUeXBlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgSXNFbWFpbEFscmVhZHlFeGlzdCB9IGZyb20gXCIuLi92YWxpZGF0ZS92YWxpZGF0ZUVtYWlsXCI7XG5pbXBvcnQgeyBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0IH0gZnJvbSBcIi4uL3ZhbGlkYXRlL3ZhbGlkYXRlVXNlcm5hbWVcIjtcblxuQElucHV0VHlwZSgpXG5leHBvcnQgY2xhc3MgVXNlcklucHV0IHtcbiAgICBARmllbGQoKVxuICAgIEBMZW5ndGgoMSwgMTAwKVxuICAgIGZpcnN0TmFtZSE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgQExlbmd0aCgxLCAxMDApXG4gICAgbGFzdE5hbWUhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBJc0VtYWlsKClcbiAgICBASXNFbWFpbEFscmVhZHlFeGlzdCh7IG1lc3NhZ2U6IFwiZW1haWwgaXMgYWxyZWFkeSBpbiB1c2VcIiB9KVxuICAgIGVtYWlsITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBwYXNzd29yZCE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgQElzVXNlcm5hbWVBbHJlYWR5RXhpc3QoeyBtZXNzYWdlOiBcInVzZXJuYW1lIGlzIGFscmVhZHkgaW4gdXNlXCJ9KVxuICAgIHVzZXJuYW1lITogc3RyaW5nO1xuXG5cbiAgICBcbn0iLCJpbXBvcnQgeyByZWdpc3RlckRlY29yYXRvciwgVmFsaWRhdGlvbk9wdGlvbnMsIFZhbGlkYXRvckNvbnN0cmFpbnQsIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2UgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL1VzZXIvdXNlclwiO1xuLy8gaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZW50aXR5L09iamVjdFBvc3RcIjtcbiBcbiBcbi8vIEBWYWxpZGF0b3JDb25zdHJhaW50KHsgYXN5bmM6IHRydWUgfSlcbi8vIGV4cG9ydCBjbGFzcyBGaW5hbE93bmVySWRcbi8vICAgICBpbXBsZW1lbnRzIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2Uge1xuLy8gICAgIC8vIHZhbGlkYXRlKF9vd25lcklkOiBzdHJpbmcpOiBQcm9taXNlPFBvc3RPYmplY3RUeXBlIHwgbnVsbD4ge1xuLy8gICAgIC8vICAgICByZXR1cm4gXG4vLyAgICAgLy8gfVxuLy8gfVxuXG5AVmFsaWRhdG9yQ29uc3RyYWludCh7IGFzeW5jOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgSXNFbWFpbEFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICBpbXBsZW1lbnRzIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2Uge1xuICAgIHZhbGlkYXRlKGVtYWlsOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IGVtYWlsIH0gfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSXNFbWFpbEFscmVhZHlFeGlzdCh2YWxpZGF0ZU9wdGlvbnM/OiBWYWxpZGF0aW9uT3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3Q6IE9iamVjdCwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmVnaXN0ZXJEZWNvcmF0b3Ioe1xuICAgICAgICAgICAgdGFyZ2V0OiBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHZhbGlkYXRlT3B0aW9ucyxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzOiBbXSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogSXNFbWFpbEFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG59IiwiaW1wb3J0IHsgcmVnaXN0ZXJEZWNvcmF0b3IsIFZhbGlkYXRpb25PcHRpb25zLCBWYWxpZGF0b3JDb25zdHJhaW50LCBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL3VzZXJcIjtcblxuXG5cbkBWYWxpZGF0b3JDb25zdHJhaW50KHsgYXN5bmM6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0Q29uc3RyYWludFxuICAgIGltcGxlbWVudHMgVmFsaWRhdG9yQ29uc3RyYWludEludGVyZmFjZSB7XG4gICAgdmFsaWRhdGUodXNlcm5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gVXNlci5maW5kT25lKHsgd2hlcmU6IHsgdXNlcm5hbWUgfSB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0KHZhbGlkYXRlT3B0aW9ucz86IFZhbGlkYXRpb25PcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdDogT2JqZWN0LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xuICAgICAgICByZWdpc3RlckRlY29yYXRvcih7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgb3B0aW9uczogdmFsaWRhdGVPcHRpb25zLFxuICAgICAgICAgICAgY29uc3RyYWludHM6IFtdLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0Q29uc3RyYWludFxuICAgICAgICB9KTtcbiAgICB9O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy12YWxpZGF0b3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR5cGUtZ3JhcGhxbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oNjA3KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=