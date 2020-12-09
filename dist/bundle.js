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
            returnUser.username = `${singleParametr.firstName} ${singleParametr.lastName}`;
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
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(906);
const type_graphql_1 = __webpack_require__(885);
const ResolvePost_1 = __webpack_require__(588);
const apollo_server_1 = __webpack_require__(232);
const typeorm_1 = __webpack_require__(794);
const ObjectPost_1 = __webpack_require__(160);
const ResolveUser_1 = __webpack_require__(604);
const user_1 = __webpack_require__(171);
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
            "entities": [ObjectPost_1.PostObjectType]
        });
        const connectionUser = yield typeorm_1.createConnection({
            "name": "defaul",
            "type": "postgres",
            "host": "localhost",
            "port": 5432,
            "username": "irlenturlykhanov",
            "password": "1234",
            "database": "posts",
            "synchronize": true,
            "logging": true,
            "entities": [user_1.User]
        });
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [ResolvePost_1.PostResolver, ResolveUser_1.UserResolver],
        });
        const production = "production" === "production";
        const server = new apollo_server_1.ApolloServer({
            schema: schema,
            playground: true,
        });
        const serverInfo = yield server.listen(PORT);
        console.log("SERVEER STARTED");
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
const validate_1 = __webpack_require__(125);
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
    validate_1.IsEmailAlreadyExist({ message: "email is already in use" }),
    __metadata("design:type", String)
], UserInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInput.prototype, "password", void 0);
UserInput = __decorate([
    type_graphql_1.InputType()
], UserInput);
exports.UserInput = UserInput;


/***/ }),

/***/ 125:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9Qb3N0U2hpdC9SZXNvbHZlUG9zdC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9Qb3N0U2hpdC9SZXNvbHZlVXNlci50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9Vc2VyL3VzZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvYXJnc1R5cGUvQXJnc1Bvc3QudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvZW50aXR5L09iamVjdFBvc3QudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvaW5wdXRUeXBlL0lucHV0UG9zdC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9pbnB1dFR5cGUvaW5wdXRVc2VyLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3ZhbGlkYXRlL3ZhbGlkYXRlLnRzIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlclwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImNsYXNzLXZhbGlkYXRvclwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwicmVmbGVjdC1tZXRhZGF0YVwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwidHlwZS1ncmFwaHFsXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJ0eXBlb3JtXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29weXNoaXQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBb0U7QUFDcEUsOENBQXVEO0FBQ3ZELDRDQUFzRDtBQUN0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QU8sV0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEQsSUFBSSxJQUFJO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBUlksNkJBQTZCO0lBRHpDLHFDQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0dBQ3hCLDZCQUE2QixDQVF6QztBQVJZLHNFQUE2QjtBQVUxQyxTQUFnQixtQkFBbUIsQ0FBQyxlQUFtQztJQUNuRSxPQUFPLFVBQVMsTUFBYyxFQUFFLFlBQW9CO1FBQ2hELG1DQUFpQixDQUFDO1lBQ2QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO1lBQzFCLFlBQVksRUFBRSxZQUFZO1lBQzFCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsU0FBUyxFQUFFLDZCQUE2QjtTQUMzQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDO0FBVkQsa0RBVUM7Ozs7Ozs7O0FDbENELDJDOzs7Ozs7O0FDQUEsc0M7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLDhDOzs7Ozs7O0FDQUEsMEM7Ozs7Ozs7QUNBQSxxQzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcmcsIEFyZ3MsIE11dGF0aW9uLCBRdWVyeSwgUmVzb2x2ZXIgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBQb3N0T2JqZWN0VHlwZSAgfSBmcm9tIFwiLi4vZW50aXR5L09iamVjdFBvc3RcIjtcbmltcG9ydCB7IENyZWF0ZVBvc3RBcmdzIH0gZnJvbSBcIi4uL2FyZ3NUeXBlL0FyZ3NQb3N0XCI7XG5pbXBvcnQgeyBDcmVhdGVQb3N0SW5wdXQgfSBmcm9tIFwiLi4vaW5wdXRUeXBlL0lucHV0UG9zdFwiO1xuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgUG9zdFJlc29sdmVyIHtcbiAgICBAUXVlcnkoKCkgPT4gU3RyaW5nKVxuICAgIGFzeW5jIEhlbGxvQml0Y2goKSB7XG4gICAgICAgIHJldHVybiBcIkhpQml0Y2hcIjtcbiAgICB9XG5cbiAgICBATXV0YXRpb24oKCkgPT4gUG9zdE9iamVjdFR5cGUsIHsgbmFtZTogJ2NyZWF0ZVBvc3RCeUFyZ3MnIH0pXG4gICAgYXN5bmMgY3JlYXRlUG9zdEJ5QXJncyhcbiAgICAgICAgQEFyZ3MoKSBhbGxBcmdzOiBDcmVhdGVQb3N0QXJnc1xuICAgICk6IFByb21pc2U8UG9zdE9iamVjdFR5cGUgfCB2b2lkPiB7IC8vIHZvaWQgcmV0dXJucyBcInVuZGVmaW5lZFwiXG4gICAgICAgIGNvbnN0IHJldHVyblBvc3QgPSBuZXcgUG9zdE9iamVjdFR5cGUoKTtcbiAgICAgICAgcmV0dXJuUG9zdC5kZXNjcmlwdGlvbiA9IGFsbEFyZ3MuZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICByZXR1cm5Qb3N0LmNvbW1lbnRzID0gYWxsQXJncy5jb21tZW50cztcbiAgICAgICAgcmV0dXJuUG9zdC5saWtlcyA9IGFsbEFyZ3MubGlrZXM7XG4gICAgICAgIC8vIHJldHVyblBvc3QuaWQgPSBhbGxBcmdzLmlkO1xuICAgICAgICByZXR1cm5Qb3N0LmlzQWN0aXZlID0gYWxsQXJncy5pc0FjdGl2ZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBvc3RSZXAgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFBvc3RPYmplY3RUeXBlKTtcbiAgICAgICAgcG9zdFJlcC5zYXZlKHJldHVyblBvc3QpO1xuICAgICAgICByZXR1cm4gcmV0dXJuUG9zdDtcbiAgICB9XG5cbiAgICBATXV0YXRpb24oKCkgPT4gUG9zdE9iamVjdFR5cGUsIHsgbmFtZTogXCJjcmVhdGVQb3N0QnlJbnB1dFwiIH0pXG4gICAgYXN5bmMgc2FhcyhcbiAgICAgICAgQEFyZygnaW5nbGVQYXJhbWV0cicpIHNpbmdsZVBhcmFtZXRyOiBDcmVhdGVQb3N0SW5wdXRcbiAgICApOiBQcm9taXNlPFBvc3RPYmplY3RUeXBlIHwgdm9pZD4ge1xuICAgICAgICBjb25zdCByZXR1cm5Qb3N0ID0gbmV3IFBvc3RPYmplY3RUeXBlKCk7XG4gICAgICAgIHJldHVyblBvc3QuZGVzY3JpcHRpb24gPSBzaW5nbGVQYXJhbWV0ci5kZXNjcmlwdGlvbjtcbiAgICAgICAgXG4gICAgICAgIHJldHVyblBvc3QuY29tbWVudHMgPSBzaW5nbGVQYXJhbWV0ci5jb21tZW50cztcbiAgICAgICAgcmV0dXJuUG9zdC5saWtlcyA9IHNpbmdsZVBhcmFtZXRyLmxpa2VzO1xuICAgICAgICByZXR1cm5Qb3N0LmlkID0gc2luZ2xlUGFyYW1ldHIuaWQ7XG4gICAgICAgIHJldHVyblBvc3QuaXNBY3RpdmUgPSBzaW5nbGVQYXJhbWV0ci5pc0FjdGl2ZTtcblxuICAgICAgICBjb25zdCBwb3N0UmVwID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShQb3N0T2JqZWN0VHlwZSk7XG4gICAgICAgIHBvc3RSZXAuc2F2ZShyZXR1cm5Qb3N0KTtcbiAgICAgICAgcmV0dXJuIHJldHVyblBvc3Q7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgQXJnLCBNdXRhdGlvbiwgUXVlcnksIFJlc29sdmVyIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBVc2VySW5wdXQgfSBmcm9tIFwiLi4vaW5wdXRUeXBlL2lucHV0VXNlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL3VzZXJcIjtcblxuXG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmVyIHtcbiAgICBAUXVlcnkoKCkgPT4gU3RyaW5nKVxuICAgIGFzeW5jIEhlbGxvQml0Y2goKSB7XG4gICAgICAgIHJldHVybiBcIkhpQml0Y2hcIjtcbiAgICB9XG5cbiAgICAvLyBATXV0YXRpb24oKCkgPT4gVXNlcilcbiAgICAvLyBhc3luYyByZWdpc3RlcihAQXJnKFwiZGF0YVwiKSBTaW5nbGVQYXJhbWV0cjogVXNlcklucHV0KTogUHJvbWlzZTxVc2VyIHwgYW55PiB7XG4gICAgLy8gICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goU2luZ2xlUGFyYW1ldHIucGFzc3dvcmQsIDEyKVxuXG4gICAgLy8gICAgIGNvbnN0IFVzZXJuYW1lID0gYCR7U2luZ2xlUGFyYW1ldHIuZmlyc3ROYW1lfSAuICR7U2luZ2xlUGFyYW1ldHIubGFzdE5hbWV9YFxuXG4gICAgLy8gICAgIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgLy8gICAgIC8vICAgICBmaXJzdE5hbWUsXG4gICAgLy8gICAgIC8vICAgICBsYXN0TmFtZSxcbiAgICAvLyAgICAgLy8gICAgIGVtYWlsLFxuICAgIC8vICAgICAvLyAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgIC8vICAgICAvLyAgICAgdXNlcm5hbWU6IFVzZXJuYW1lXG4gICAgLy8gICAgIC8vIH0pLnNhdmUoKTtcblxuICAgIC8vICAgICBjb25zdCB1c2VyUmVwID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShVc2VyKTtcbiAgICAvLyAgICAgdXNlclJlcC5zYXZlKHtTaW5nbGVQYXJhbWV0ci5maXJzdE5hbWUsIH0pXG5cbiAgICAvLyAgICAgcmV0dXJuIHVzZXI7XG4gICAgLy8gfVxuXG4gICAgQE11dGF0aW9uKCgpID0+IFVzZXIpXG4gICAgYXN5bmMgcmVnaXN0ZXIoQEFyZyhcIlVzZXJEYXRhXCIpIHNpbmdsZVBhcmFtZXRyOiBVc2VySW5wdXRcbiAgICApOiBQcm9taXNlPFVzZXIgfCB2b2lkPiB7XG4gICAgICAgIGNvbnN0IHJldHVyblVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICByZXR1cm5Vc2VyLmZpcnN0TmFtZSA9IHNpbmdsZVBhcmFtZXRyLmZpcnN0TmFtZTtcbiAgICAgICAgcmV0dXJuVXNlci5sYXN0TmFtZSA9IHNpbmdsZVBhcmFtZXRyLmxhc3ROYW1lO1xuICAgICAgICByZXR1cm5Vc2VyLmVtYWlsID0gc2luZ2xlUGFyYW1ldHIuZW1haWw7XG4gICAgICAgIC8vIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYmNyeXB0Lmhhc2goc2luZ2xlUGFyYW1ldHIucGFzc3dvcmQsIDEyKVxuICAgICAgICByZXR1cm5Vc2VyLnBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goc2luZ2xlUGFyYW1ldHIucGFzc3dvcmQsIDEyKTtcbiAgICAgICAgcmV0dXJuVXNlci51c2VybmFtZSA9IGAke3NpbmdsZVBhcmFtZXRyLmZpcnN0TmFtZX0gJHtzaW5nbGVQYXJhbWV0ci5sYXN0TmFtZX1gXG4gICAgICAgIGNvbnN0IHVzZXJSZXAgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFVzZXIpO1xuICAgICAgICB1c2VyUmVwLnNhdmUocmV0dXJuVXNlcik7XG4gICAgICAgIHJldHVybiByZXR1cm5Vc2VyO1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBGaWVsZCwgSUQsIE9iamVjdFR5cGUsIFJvb3QgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBCYXNlRW50aXR5LCBDb2x1bW4sIEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cblxuQEVudGl0eSgpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIEJhc2VFbnRpdHkge1xuXG4gICAgQEZpZWxkKCgpID0+IElEKVxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgICBpZCE6IG51bWJlcjtcblxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbigpXG4gICAgZmlyc3ROYW1lITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKClcbiAgICBsYXN0TmFtZSE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbihcInRleHRcIiwgeyB1bmlxdWU6IHRydWUgfSlcbiAgICBlbWFpbCE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbigpXG4gICAgaXNBY3RpdmU/OiBib29sZWFuO1xuXG4gICAgLy8gQEZpZWxkKClcbiAgICBAQ29sdW1uKClcbiAgICBwYXNzd29yZCE6IHN0cmluZztcblxuICAgIC8vIEBGaWVsZCgpXG4gICAgLy8gdXNlcm5hbWUoQFJvb3QoKSBwYXJlbnQ6IFVzZXIpOiBTdHJpbmcge1xuICAgIC8vICAgICByZXR1cm4gYCR7cGFyZW50LmZpcnN0TmFtZX0gLiAke3BhcmVudC5sYXN0TmFtZX1gXG4gICAgLy8gfVxuXG4gICAgQENvbHVtbigpXG4gICAgdXNlcm5hbWUhOiBzdHJpbmc7XG59XG5cbiIsIi8vIGltcG9ydCB7IGlzSW5wdXRPYmplY3RUeXBlIH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCB7IEFyZ3NUeXBlLCBGaWVsZCwgSUQsIElucHV0VHlwZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbi8vIGltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbi8vIEBFbnRpdHkoKVxuQEFyZ3NUeXBlKClcbmV4cG9ydCBjbGFzcyBDcmVhdGVQb3N0QXJncyB7XG4gICAgQEZpZWxkKClcbiAgICAvLyBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gICAgaWQhOiBudW1iZXI7XG5cbiAgICBARmllbGQoKVxuICAgIGRlc2NyaXB0aW9uITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBjb21tZW50cz86IG51bWJlcjtcblxuICAgIEBGaWVsZCgpXG4gICAgbGlrZXM/OiBudW1iZXI7XG5cbiAgICBARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuICAgIG93bmVySWQ/OiBudW1iZXI7XG5cbiAgICBARmllbGQoKVxuICAgIGlzQWN0aXZlITogYm9vbGVhbjtcbn1cblxuIiwiaW1wb3J0IHsgT2JqZWN0VHlwZSwgSUQsIEZpZWxkIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgQmFzZUVudGl0eSwgQ29sdW1uLCBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuIFxuQEVudGl0eSgpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgUG9zdE9iamVjdFR5cGUgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiAgICBARmllbGQoKCkgPT4gSUQpXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICAgIGlkITogbnVtYmVyO1xuIFxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbih7dHlwZTogXCJ0ZXh0XCJ9KVxuICAgIGRlc2NyaXB0aW9uITogc3RyaW5nO1xuIFxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbigpXG4gICAgY29tbWVudHM/OiBudW1iZXI7XG4gXG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKClcbiAgICBsaWtlcz86IG51bWJlcjtcblxuXG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKClcbiAgICBpc0FjdGl2ZSE6IGJvb2xlYW47XG59IiwiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgYnVpbGRTY2hlbWEgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBQb3N0UmVzb2x2ZXIgfSBmcm9tIFwiLi9Qb3N0U2hpdC9SZXNvbHZlUG9zdFwiO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi9lbnRpdHkvT2JqZWN0UG9zdFwiO1xuaW1wb3J0IHsgVXNlclJlc29sdmVyIH0gZnJvbSBcIi4vUG9zdFNoaXQvUmVzb2x2ZVVzZXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9Vc2VyL3VzZXJcIjtcblxuXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDQwO1xuXG5hc3luYyBmdW5jdGlvbiBCb290c3RyYXAoKSB7XG5cbiAgICBjb25zdCBjb25uZWN0aW9uUG9zdCA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgICAgICBcIm5hbWVcIjogXCJkZWZhdWx0XCIsXG4gICAgICAgIFwidHlwZVwiOiBcInBvc3RncmVzXCIsXG4gICAgICAgIFwiaG9zdFwiOiBcImxvY2FsaG9zdFwiLFxuICAgICAgICBcInBvcnRcIjogNTQzMixcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcImlybGVudHVybHlraGFub3ZcIixcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcIjEyMzRcIixcbiAgICAgICAgXCJkYXRhYmFzZVwiOiBcInBvc3RzXCIsXG4gICAgICAgIFwic3luY2hyb25pemVcIjogdHJ1ZSxcbiAgICAgICAgXCJsb2dnaW5nXCI6IHRydWUsXG4gICAgICAgIFwiZW50aXRpZXNcIjogW1Bvc3RPYmplY3RUeXBlXVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29ubmVjdGlvblVzZXIgPSBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKHtcbiAgICAgICBcIm5hbWVcIjogXCJkZWZhdWxcIixcbiAgICAgICBcInR5cGVcIjogXCJwb3N0Z3Jlc1wiLFxuICAgICAgIFwiaG9zdFwiOiBcImxvY2FsaG9zdFwiLFxuICAgICAgIFwicG9ydFwiOiA1NDMyLFxuICAgICAgIFwidXNlcm5hbWVcIjogXCJpcmxlbnR1cmx5a2hhbm92XCIsXG4gICAgICAgXCJwYXNzd29yZFwiOiBcIjEyMzRcIixcbiAgICAgICBcImRhdGFiYXNlXCI6IFwicG9zdHNcIixcbiAgICAgICBcInN5bmNocm9uaXplXCI6IHRydWUsXG4gICAgICAgXCJsb2dnaW5nXCI6IHRydWUsXG4gICAgICAgXCJlbnRpdGllc1wiOiBbVXNlcl1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNjaGVtYSA9IGF3YWl0IGJ1aWxkU2NoZW1hKHtcbiAgICAgICAgcmVzb2x2ZXJzOiBbUG9zdFJlc29sdmVyLCBVc2VyUmVzb2x2ZXJdLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuXG4gICAgY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwbGF5Z3JvdW5kOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VydmVySW5mbyA9IGF3YWl0IHNlcnZlci5saXN0ZW4oUE9SVCk7XG4gICAgY29uc29sZS5sb2coXCJTRVJWRUVSIFNUQVJURURcIik7XG59XG5cbkJvb3RzdHJhcCgpICIsImltcG9ydCB7IEZpZWxkLCBJbnB1dFR5cGUgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG4vLyBpbXBvcnQgeyBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcblxuLy8gQEVudGl0eSgpXG5ASW5wdXRUeXBlKClcbmV4cG9ydCBjbGFzcyBDcmVhdGVQb3N0SW5wdXQge1xuICAgIEBGaWVsZCgpXG4gICAgLy8gQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICAgIGlkITogbnVtYmVyO1xuXG4gICAgQEZpZWxkKClcbiAgICBkZXNjcmlwdGlvbiE6IHN0cmluZztcblxuICAgIEBGaWVsZCh7bnVsbGFibGU6IHRydWV9KVxuICAgIGNvbW1lbnRzPzogbnVtYmVyO1xuXG4gICAgQEZpZWxkKClcbiAgICBsaWtlcz86IG51bWJlcjtcblxuICAgIEBGaWVsZCgpXG4gICAgb3duZXJJZCE6IG51bWJlcjtcblxuICAgIEBGaWVsZCgpXG4gICAgaXNBY3RpdmUhOiBib29sZWFuO1xufSIsImltcG9ydCB7IElzRW1haWwsIExlbmd0aCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEZpZWxkLCBJbnB1dFR5cGUgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBJc0VtYWlsQWxyZWFkeUV4aXN0IH0gZnJvbSBcIi4uL3ZhbGlkYXRlL3ZhbGlkYXRlXCI7XG5cblxuQElucHV0VHlwZSgpXG5leHBvcnQgY2xhc3MgVXNlcklucHV0IHtcbiAgICBARmllbGQoKVxuICAgIEBMZW5ndGgoMSwgMTAwKVxuICAgIGZpcnN0TmFtZSE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgQExlbmd0aCgxLCAxMDApXG4gICAgbGFzdE5hbWUhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBJc0VtYWlsKClcbiAgICBASXNFbWFpbEFscmVhZHlFeGlzdCh7IG1lc3NhZ2U6IFwiZW1haWwgaXMgYWxyZWFkeSBpbiB1c2VcIiB9KVxuICAgIGVtYWlsITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBwYXNzd29yZCE6IHN0cmluZztcblxuXG4gICAgXG59IiwiaW1wb3J0IHsgcmVnaXN0ZXJEZWNvcmF0b3IsIFZhbGlkYXRpb25PcHRpb25zLCBWYWxpZGF0b3JDb25zdHJhaW50LCBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL3VzZXJcIjtcbi8vIGltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4uL2VudGl0eS9PYmplY3RQb3N0XCI7XG4gXG4gXG4vLyBAVmFsaWRhdG9yQ29uc3RyYWludCh7IGFzeW5jOiB0cnVlIH0pXG4vLyBleHBvcnQgY2xhc3MgRmluYWxPd25lcklkXG4vLyAgICAgaW1wbGVtZW50cyBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIHtcbi8vICAgICAvLyB2YWxpZGF0ZShfb3duZXJJZDogc3RyaW5nKTogUHJvbWlzZTxQb3N0T2JqZWN0VHlwZSB8IG51bGw+IHtcbi8vICAgICAvLyAgICAgcmV0dXJuIFxuLy8gICAgIC8vIH1cbi8vIH1cblxuQFZhbGlkYXRvckNvbnN0cmFpbnQoeyBhc3luYzogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIElzRW1haWxBbHJlYWR5RXhpc3RDb25zdHJhaW50XG4gICAgaW1wbGVtZW50cyBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIHtcbiAgICB2YWxpZGF0ZShlbWFpbDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBVc2VyLmZpbmRPbmUoeyB3aGVyZTogeyBlbWFpbCB9IH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIElzRW1haWxBbHJlYWR5RXhpc3QodmFsaWRhdGVPcHRpb25zPzogVmFsaWRhdGlvbk9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0OiBPYmplY3QsIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJlZ2lzdGVyRGVjb3JhdG9yKHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBvcHRpb25zOiB2YWxpZGF0ZU9wdGlvbnMsXG4gICAgICAgICAgICBjb25zdHJhaW50czogW10sXG4gICAgICAgICAgICB2YWxpZGF0b3I6IElzRW1haWxBbHJlYWR5RXhpc3RDb25zdHJhaW50XG4gICAgICAgIH0pO1xuICAgIH07XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzLXZhbGlkYXRvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBlb3JtXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==