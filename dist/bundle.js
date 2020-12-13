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


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
const inputUser_1 = __webpack_require__(381);
const user_1 = __webpack_require__(171);
const keys_1 = __webpack_require__(301);
const signOption_1 = __webpack_require__(151);
const jwt = __importStar(__webpack_require__(722));
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
            yield returnUser.save();
            const tokenUser = jwt.sign({
                id: returnUser.id,
                firstName: returnUser.firstName,
                lastName: returnUser.lastName,
                email: returnUser.email,
                username: returnUser.username,
            }, keys_1.PrivateKey, signOption_1.SignOption);
            returnUser.token = tokenUser;
            yield returnUser.save();
            return tokenUser;
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
    type_graphql_1.Mutation(() => String),
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
const ObjectPost_1 = __webpack_require__(160);
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
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
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(() => [ObjectPost_1.PostObjectType]),
    typeorm_1.OneToMany('PostObjectType', (post) => post.user, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Array)
], User.prototype, "posts", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "token", void 0);
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
    typeorm_1.PrimaryGeneratedColumn('uuid'),
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
__decorate([
    typeorm_1.Column({ nullable: true }),
    typeorm_1.ManyToOne('User', (user) => user.id),
    __metadata("design:type", String)
], PostObjectType.prototype, "ownerId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    typeorm_1.ManyToOne('User', (user) => user.posts),
    __metadata("design:type", String)
], PostObjectType.prototype, "user", void 0);
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
const CheckLogin_1 = __webpack_require__(542);
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
            resolvers: [ResolvePost_1.PostResolver, ResolveUser_1.UserResolver, CheckLogin_1.CheckLogin],
        });
        const production = "production" === "production";
        const server = new apollo_server_1.ApolloServer({
            schema: schema,
            playground: true,
            context: ({ req }) => ({ req })
        });
        server.listen(PORT, () => {
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

/***/ 890:
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
exports.LoginInput = void 0;
const type_graphql_1 = __webpack_require__(885);
let LoginInput = class LoginInput {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], LoginInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], LoginInput.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LoginInput.prototype, "password", void 0);
LoginInput = __decorate([
    type_graphql_1.InputType()
], LoginInput);
exports.LoginInput = LoginInput;


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

/***/ 542:
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
exports.CheckLogin = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
const LoginInput_1 = __webpack_require__(890);
const bcryptjs_1 = __importDefault(__webpack_require__(773));
const user_1 = __webpack_require__(171);
let CheckLogin = class CheckLogin {
    Login(theParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            const TheUser = yield typeorm_1.getRepository(user_1.User);
            const TheEmail = theParametr.email;
            const TheUsername = theParametr.username;
            const ThePassword = theParametr.password;
            const EmailFind = yield TheUser.findOne({ where: { email: TheEmail } });
            const UsernameFind = yield TheUser.findOne({ where: { username: TheUsername } });
            console.log('EmailFind', EmailFind);
            console.log('UsernameFind', UsernameFind);
            if (!EmailFind && !UsernameFind) {
                return null;
            }
            if (EmailFind) {
                const PasswordMatch = yield bcryptjs_1.default.compare(ThePassword, EmailFind.password);
                if (!PasswordMatch) {
                    return null;
                }
                else {
                    return EmailFind;
                }
            }
            if (UsernameFind) {
                const PasswordMatch = yield bcryptjs_1.default.compare(ThePassword, UsernameFind.password);
                if (!PasswordMatch) {
                    return null;
                }
                else {
                    return UsernameFind;
                }
            }
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => user_1.User),
    __param(0, type_graphql_1.Arg("LoginData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginInput_1.LoginInput]),
    __metadata("design:returntype", Promise)
], CheckLogin.prototype, "Login", null);
CheckLogin = __decorate([
    type_graphql_1.Resolver()
], CheckLogin);
exports.CheckLogin = CheckLogin;


/***/ }),

/***/ 301:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PublicKey = exports.PrivateKey = void 0;
exports.PrivateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIBPAIBAAJBAMSP4b0xB6dSD4x9daueFuX560l9HRyWoeXAU1Va+ERcxYQOsjfm
YxKB2xeelK92ebcp1ui10hATvbZiBW3cxk8CAwEAAQJBAIFzZK6tkKXQNG9I3OsW
ZWw2CI/QdxCx35Oo8vjevWx/KRmEHBfwkUhKj9kdJgU/5mpc0WgWG4z5WdErnb9H
uLkCIQDgnXXKgC1FFn75eKt/hq3g5hKXDPgmVTPPl/S6ZnTMywIhAOAG9QUvGRuP
MmhpQnXOom/jrZXGBf++/1+EExvDXyANAiEAlfHHvoVOsz5PSW763ckkrmwooNmx
lrVuPvksEHtxIX0CIFzzhgY4nHpK1+dqhSDMM6mpFgTmvOZ4IQ1Ih4UlcvqhAiEA
pm52EInTb4kzL3SsJqgUwTjeFSTM7U1h29jAVL3iN28=
-----END RSA PRIVATE KEY-----`;
exports.PublicKey = `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMSP4b0xB6dSD4x9daueFuX560l9HRyW
oeXAU1Va+ERcxYQOsjfmYxKB2xeelK92ebcp1ui10hATvbZiBW3cxk8CAwEAAQ==
-----END PUBLIC KEY-----`;


/***/ }),

/***/ 151:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignOption = void 0;
exports.SignOption = {
    issuer: "",
    subject: "",
    audience: "",
    expiresIn: "365d",
    algorithm: "RS256"
};


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

/***/ 722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9Qb3N0U2hpdC9SZXNvbHZlUG9zdC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9Qb3N0U2hpdC9SZXNvbHZlVXNlci50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9Vc2VyL3VzZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvYXJnc1R5cGUvQXJnc1Bvc3QudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvZW50aXR5L09iamVjdFBvc3QudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvaW5wdXRUeXBlL0lucHV0UG9zdC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9pbnB1dFR5cGUvTG9naW5JbnB1dC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9pbnB1dFR5cGUvaW5wdXRVc2VyLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL2xvZ2luL0NoZWNrTG9naW4udHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdG9rZW4va2V5cy50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90b2tlbi9zaWduT3B0aW9uLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3ZhbGlkYXRlL3ZhbGlkYXRlRW1haWwudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdmFsaWRhdGUvdmFsaWRhdGVVc2VybmFtZS50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImJjcnlwdGpzXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJjbGFzcy12YWxpZGF0b3JcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwicmVmbGVjdC1tZXRhZGF0YVwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwidHlwZS1ncmFwaHFsXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJ0eXBlb3JtXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29weXNoaXQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBb0U7QUFDcEUsOENBQXVEO0FBQ3ZELDRDQUFzRDtBQUN0RCw2Q0FBeUQ7QUFDekQsMkNBQXdDO0FBR3hDLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFFZixVQUFVOztZQUNaLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7S0FBQTtJQUdLLGdCQUFnQixDQUNWLE9BQXVCOztZQUUvQixNQUFNLFVBQVUsR0FBRyxJQUFJLDJCQUFjLEVBQUUsQ0FBQztZQUN4QyxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFFN0MsVUFBVSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUVqQyxVQUFVLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFFdkMsTUFBTSxPQUFPLEdBQUcsTUFBTSx1QkFBYSxDQUFDLDJCQUFjLENBQUMsQ0FBQztZQUNwRCxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtJQUdLLElBQUksQ0FDZ0IsY0FBK0I7O1lBRXJELE1BQU0sVUFBVSxHQUFHLElBQUksMkJBQWMsRUFBRSxDQUFDO1lBQ3hDLFVBQVUsQ0FBQyxX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QUFDLEVBQUU7WUFDckQsSUFBSSxJQUFJO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBUlksZ0NBQWdDO0lBRDVDLHFDQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0dBQ3hCLGdDQUFnQyxDQVE1QztBQVJZLDRFQUFnQztBQVU3QyxTQUFnQixzQkFBc0IsQ0FBQyxlQUFtQztJQUN0RSxPQUFPLFVBQVMsTUFBYyxFQUFFLFlBQW9CO1FBQ2hELG1DQUFpQixDQUFDO1lBQ2QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO1lBQzFCLFlBQVksRUFBRSxZQUFZO1lBQzFCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsU0FBUyxFQUFFLGdDQUFnQztTQUM5QyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDO0FBVkQsd0RBVUM7Ozs7Ozs7O0FDMUJELDJDOzs7Ozs7O0FDQUEsc0M7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLHFDOzs7Ozs7O0FDQUEsMEM7Ozs7Ozs7QUNBQSw4Qzs7Ozs7OztBQ0FBLDBDOzs7Ozs7O0FDQUEscUM7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJnLCBBcmdzLCBNdXRhdGlvbiwgUXVlcnksIFJlc29sdmVyIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgIH0gZnJvbSBcIi4uL2VudGl0eS9PYmplY3RQb3N0XCI7XG5pbXBvcnQgeyBDcmVhdGVQb3N0QXJncyB9IGZyb20gXCIuLi9hcmdzVHlwZS9BcmdzUG9zdFwiO1xuaW1wb3J0IHsgQ3JlYXRlUG9zdElucHV0IH0gZnJvbSBcIi4uL2lucHV0VHlwZS9JbnB1dFBvc3RcIjtcbmltcG9ydCB7IGdldFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIFBvc3RSZXNvbHZlciB7XG4gICAgQFF1ZXJ5KCgpID0+IFN0cmluZylcbiAgICBhc3luYyBIZWxsb0JpdGNoKCkge1xuICAgICAgICByZXR1cm4gXCJIaUJpdGNoXCI7XG4gICAgfVxuXG4gICAgQE11dGF0aW9uKCgpID0+IFBvc3RPYmplY3RUeXBlLCB7IG5hbWU6ICdjcmVhdGVQb3N0QnlBcmdzJyB9KVxuICAgIGFzeW5jIGNyZWF0ZVBvc3RCeUFyZ3MoXG4gICAgICAgIEBBcmdzKCkgYWxsQXJnczogQ3JlYXRlUG9zdEFyZ3NcbiAgICApOiBQcm9taXNlPFBvc3RPYmplY3RUeXBlIHwgdm9pZD4geyAvLyB2b2lkIHJldHVybnMgXCJ1bmRlZmluZWRcIlxuICAgICAgICBjb25zdCByZXR1cm5Qb3N0ID0gbmV3IFBvc3RPYmplY3RUeXBlKCk7XG4gICAgICAgIHJldHVyblBvc3QuZGVzY3JpcHRpb24gPSBhbGxBcmdzLmRlc2NyaXB0aW9uO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuUG9zdC5jb21tZW50cyA9IGFsbEFyZ3MuY29tbWVudHM7XG4gICAgICAgIHJldHVyblBvc3QubGlrZXMgPSBhbGxBcmdzLmxpa2VzO1xuICAgICAgICAvLyByZXR1cm5Qb3N0LmlkID0gYWxsQXJncy5pZDtcbiAgICAgICAgcmV0dXJuUG9zdC5pc0FjdGl2ZSA9IGFsbEFyZ3MuaXNBY3RpdmU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwb3N0UmVwID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShQb3N0T2JqZWN0VHlwZSk7XG4gICAgICAgIHBvc3RSZXAuc2F2ZShyZXR1cm5Qb3N0KTtcbiAgICAgICAgcmV0dXJuIHJldHVyblBvc3Q7XG4gICAgfVxuXG4gICAgQE11dGF0aW9uKCgpID0+IFBvc3RPYmplY3RUeXBlLCB7IG5hbWU6IFwiY3JlYXRlUG9zdEJ5SW5wdXRcIiB9KVxuICAgIGFzeW5jIHNhYXMoXG4gICAgICAgIEBBcmcoJ2luZ2xlUGFyYW1ldHInKSBzaW5nbGVQYXJhbWV0cjogQ3JlYXRlUG9zdElucHV0XG4gICAgKTogUHJvbWlzZTxQb3N0T2JqZWN0VHlwZSB8IHZvaWQ+IHtcbiAgICAgICAgY29uc3QgcmV0dXJuUG9zdCA9IG5ldyBQb3N0T2JqZWN0VHlwZSgpO1xuICAgICAgICByZXR1cm5Qb3N0LmRlc2NyaXB0aW9uID0gc2luZ2xlUGFyYW1ldHIuZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICByZXR1cm5Qb3N0LmNvbW1lbnRzID0gc2luZ2xlUGFyYW1ldHIuY29tbWVudHM7XG4gICAgICAgIHJldHVyblBvc3QubGlrZXMgPSBzaW5nbGVQYXJhbWV0ci5saWtlcztcbiAgICAgICAgcmV0dXJuUG9zdC5pZCA9IHNpbmdsZVBhcmFtZXRyLmlkO1xuICAgICAgICByZXR1cm5Qb3N0LmlzQWN0aXZlID0gc2luZ2xlUGFyYW1ldHIuaXNBY3RpdmU7XG5cbiAgICAgICAgY29uc3QgcG9zdFJlcCA9IGF3YWl0IGdldFJlcG9zaXRvcnkoUG9zdE9iamVjdFR5cGUpO1xuICAgICAgICBwb3N0UmVwLnNhdmUocmV0dXJuUG9zdCk7XG4gICAgICAgIHJldHVybiByZXR1cm5Qb3N0O1xuICAgIH1cblxuICAgIFxuXG5cbn0iLCJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgQXJnLCBNdXRhdGlvbiwgUXVlcnksIFJlc29sdmVyIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XG4vLyBpbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9NeUNvbnRleHRcIjtcbmltcG9ydCB7IFVzZXJJbnB1dCB9IGZyb20gXCIuLi9pbnB1dFR5cGUvaW5wdXRVc2VyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL1VzZXIvdXNlclwiO1xuaW1wb3J0IHsgUHJpdmF0ZUtleSwgUHVibGljS2V5IH0gZnJvbSBcIi4uL3Rva2VuL2tleXNcIjtcbmltcG9ydCB7IFNpZ25PcHRpb24gfSBmcm9tIFwiLi4vdG9rZW4vc2lnbk9wdGlvblwiO1xuaW1wb3J0ICogYXMgand0ICBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmVyIHtcbiAgICBAUXVlcnkoKCkgPT4gU3RyaW5nKVxuICAgIGFzeW5jIEhlbGxvQml0Y2goKSB7XG4gICAgICAgIHJldHVybiBcIkhpQml0Y2hcIjtcbiAgICB9XG5cbiAgICAvLyBATXV0YXRpb24oKCkgPT4gVXNlcilcbiAgICAvLyBhc3luYyByZWdpc3RlcihAQXJnKFwiZGF0YVwiKSBTaW5nbGVQYXJhbWV0cjogVXNlcklucHV0KTogUHJvbWlzZTxVc2VyIHwgYW55PiB7XG4gICAgLy8gICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goU2luZ2xlUGFyYW1ldHIucGFzc3dvcmQsIDEyKVxuXG4gICAgLy8gICAgIGNvbnN0IFVzZXJuYW1lID0gYCR7U2luZ2xlUGFyYW1ldHIuZmlyc3ROYW1lfSAuICR7U2luZ2xlUGFyYW1ldHIubGFzdE5hbWV9YFxuXG4gICAgLy8gICAgIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgLy8gICAgIC8vICAgICBmaXJzdE5hbWUsXG4gICAgLy8gICAgIC8vICAgICBsYXN0TmFtZSxcbiAgICAvLyAgICAgLy8gICAgIGVtYWlsLFxuICAgIC8vICAgICAvLyAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgIC8vICAgICAvLyAgICAgdXNlcm5hbWU6IFVzZXJuYW1lXG4gICAgLy8gICAgIC8vIH0pLnNhdmUoKTtcblxuICAgIC8vICAgICBjb25zdCB1c2VyUmVwID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShVc2VyKTtcbiAgICAvLyAgICAgdXNlclJlcC5zYXZlKHtTaW5nbGVQYXJhbWV0ci5maXJzdE5hbWUsIH0pXG5cbiAgICAvLyAgICAgcmV0dXJuIHVzZXI7XG4gICAgLy8gfVxuXG4gICAgQE11dGF0aW9uKCgpID0+IFN0cmluZylcbiAgICBhc3luYyByZWdpc3RlcihAQXJnKFwiVXNlckRhdGFcIikgc2luZ2xlUGFyYW1ldHI6IFVzZXJJbnB1dCk6IFByb21pc2U8U3RyaW5nIHwgdm9pZCA+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJldHVyblVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICByZXR1cm5Vc2VyLmZpcnN0TmFtZSA9IHNpbmdsZVBhcmFtZXRyLmZpcnN0TmFtZTtcbiAgICAgICAgcmV0dXJuVXNlci5sYXN0TmFtZSA9IHNpbmdsZVBhcmFtZXRyLmxhc3ROYW1lO1xuICAgICAgICByZXR1cm5Vc2VyLmVtYWlsID0gc2luZ2xlUGFyYW1ldHIuZW1haWw7XG4gICAgICAgIFxuICAgICAgICByZXR1cm5Vc2VyLnBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goc2luZ2xlUGFyYW1ldHIucGFzc3dvcmQsIDEyKTtcbiAgICAgICAgcmV0dXJuVXNlci51c2VybmFtZSA9IHNpbmdsZVBhcmFtZXRyLnVzZXJuYW1lO1xuICAgICAgICBhd2FpdCByZXR1cm5Vc2VyLnNhdmUoKTtcbiAgICAgICAgY29uc3QgdG9rZW5Vc2VyID0gand0LnNpZ24oe1xuICAgICAgICAgICAgICAgIGlkOiByZXR1cm5Vc2VyLmlkLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogcmV0dXJuVXNlci5maXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IHJldHVyblVzZXIubGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IHJldHVyblVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHJldHVyblVzZXIudXNlcm5hbWUsXG4gICAgICAgIH0sIFByaXZhdGVLZXksIFNpZ25PcHRpb24pO1xuICAgICAgICByZXR1cm5Vc2VyLnRva2VuID0gdG9rZW5Vc2VyO1xuICAgICAgICBhd2FpdCByZXR1cm5Vc2VyLnNhdmUoKTtcbiAgICAgICAgcmV0dXJuIHRva2VuVXNlcjtcbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHsgUmVwbGFjZUZpZWxkV2l0aEZyYWdtZW50IH0gZnJvbSBcImFwb2xsby1zZXJ2ZXJcIjtcbmltcG9ydCB7IEZpZWxkLCBJRCwgT2JqZWN0VHlwZSwgUm9vdCB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IEJhc2VFbnRpdHksIENvbHVtbiwgRW50aXR5LCBPbmVUb01hbnksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZW50aXR5L09iamVjdFBvc3RcIjtcblxuXG5ARW50aXR5KClcbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZUVudGl0eSB7XG5cbiAgICBARmllbGQoKCkgPT4gSUQpXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oXCJ1dWlkXCIpXG4gICAgaWQhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIGZpcnN0TmFtZSE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbigpXG4gICAgbGFzdE5hbWUhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oXCJ0ZXh0XCIsIHsgdW5pcXVlOiB0cnVlIH0pXG4gICAgZW1haWwhOiBzdHJpbmc7XG5cbiAgICAvLyBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIHBhc3N3b3JkITogc3RyaW5nO1xuXG4gICAgLy8gQEZpZWxkKClcbiAgICAvLyB1c2VybmFtZShAUm9vdCgpIHBhcmVudDogVXNlcik6IFN0cmluZyB7XG4gICAgLy8gICAgIHJldHVybiBgJHtwYXJlbnQuZmlyc3ROYW1lfSAuICR7cGFyZW50Lmxhc3ROYW1lfWBcbiAgICAvLyB9XG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKClcbiAgICB1c2VybmFtZSE6IHN0cmluZztcblxuICAgIEBGaWVsZCgoKT0+W1Bvc3RPYmplY3RUeXBlXSlcbiAgICBAT25lVG9NYW55KCdQb3N0T2JqZWN0VHlwZScsIChwb3N0OiBQb3N0T2JqZWN0VHlwZSkgPT4gcG9zdC51c2VyLCB7XG4gICAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICAgIG9uVXBkYXRlOiAnQ0FTQ0FERSdcbiAgICB9KVxuICAgIHBvc3RzPzogQXJyYXk8UG9zdE9iamVjdFR5cGU+XG5cblxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gICAgdG9rZW4hOiBzdHJpbmc7XG59XG5cbiIsIi8vIGltcG9ydCB7IGlzSW5wdXRPYmplY3RUeXBlIH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCB7IEFyZ3NUeXBlLCBGaWVsZCwgSUQsIElucHV0VHlwZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbi8vIGltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbi8vIEBFbnRpdHkoKVxuQEFyZ3NUeXBlKClcbmV4cG9ydCBjbGFzcyBDcmVhdGVQb3N0QXJncyB7XG4gICAgQEZpZWxkKClcbiAgICAvLyBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gICAgaWQhOiBudW1iZXI7XG5cbiAgICBARmllbGQoKVxuICAgIGRlc2NyaXB0aW9uITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBjb21tZW50cz86IG51bWJlcjtcblxuICAgIEBGaWVsZCgpXG4gICAgbGlrZXM/OiBudW1iZXI7XG5cbiAgICBARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuICAgIG93bmVySWQ/OiBudW1iZXI7XG5cbiAgICBARmllbGQoKVxuICAgIGlzQWN0aXZlITogYm9vbGVhbjtcbn1cblxuIiwiaW1wb3J0IHsgT2JqZWN0VHlwZSwgSUQsIEZpZWxkIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgQmFzZUVudGl0eSwgQ29sdW1uLCBFbnRpdHksIEpvaW5Db2x1bW4sIE1hbnlUb09uZSwgT25lVG9PbmUsIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL3VzZXJcIjtcbmltcG9ydCB7ICB9IGZyb20gXCJtb2R1bGVcIjtcbiBcbkBFbnRpdHkoKVxuQE9iamVjdFR5cGUoKVxuZXhwb3J0IGNsYXNzIFBvc3RPYmplY3RUeXBlIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gICAgQEZpZWxkKCgpID0+IElEKVxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKCd1dWlkJylcbiAgICBpZCE6IG51bWJlcjtcbiBcbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oe3R5cGU6IFwidGV4dFwifSlcbiAgICBkZXNjcmlwdGlvbiE6IHN0cmluZztcbiBcbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIGNvbW1lbnRzPzogbnVtYmVyO1xuIFxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbigpXG4gICAgbGlrZXM/OiBudW1iZXI7XG5cblxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbigpXG4gICAgaXNBY3RpdmUhOiBib29sZWFuO1xuXG4gICAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gICAgQE1hbnlUb09uZSgnVXNlcicsICh1c2VyOiBVc2VyKSA9PiB1c2VyLmlkKVxuICAgIG93bmVySWQ/OiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgICBATWFueVRvT25lKCdVc2VyJywgKHVzZXI6IFVzZXIpID0+IHVzZXIucG9zdHMpXG4gICAgdXNlcj86IHN0cmluZztcbn0iLCJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgeyBidWlsZFNjaGVtYSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IFBvc3RSZXNvbHZlciB9IGZyb20gXCIuL1Bvc3RTaGl0L1Jlc29sdmVQb3N0XCI7XG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tIFwiYXBvbGxvLXNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBQb3N0T2JqZWN0VHlwZSB9IGZyb20gXCIuL2VudGl0eS9PYmplY3RQb3N0XCI7XG5pbXBvcnQgeyBVc2VyUmVzb2x2ZXIgfSBmcm9tIFwiLi9Qb3N0U2hpdC9SZXNvbHZlVXNlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL1VzZXIvdXNlclwiO1xuaW1wb3J0IEV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IENoZWNrTG9naW4gfSBmcm9tIFwiLi9sb2dpbi9DaGVja0xvZ2luXCI7XG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwNDA7XG5cbmFzeW5jIGZ1bmN0aW9uIEJvb3RzdHJhcCgpIHtcblxuICAgIGNvbnN0IGNvbm5lY3Rpb25Qb3N0ID0gYXdhaXQgY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgICAgIFwibmFtZVwiOiBcImRlZmF1bHRcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwicG9zdGdyZXNcIixcbiAgICAgICAgXCJob3N0XCI6IFwibG9jYWxob3N0XCIsXG4gICAgICAgIFwicG9ydFwiOiA1NDMyLFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiaXJsZW50dXJseWtoYW5vdlwiLFxuICAgICAgICBcInBhc3N3b3JkXCI6IFwiMTIzNFwiLFxuICAgICAgICBcImRhdGFiYXNlXCI6IFwicG9zdHNcIixcbiAgICAgICAgXCJzeW5jaHJvbml6ZVwiOiB0cnVlLFxuICAgICAgICBcImxvZ2dpbmdcIjogdHJ1ZSxcbiAgICAgICAgXCJlbnRpdGllc1wiOiBbUG9zdE9iamVjdFR5cGUsIFVzZXJdXG4gICAgfSk7XG5cbiAgICBjb25zdCBhcHAgPSBFeHByZXNzKCk7XG5cbiAgICBjb25zdCBzY2hlbWEgPSBhd2FpdCBidWlsZFNjaGVtYSh7XG4gICAgICAgIHJlc29sdmVyczogW1Bvc3RSZXNvbHZlciwgVXNlclJlc29sdmVyLCBDaGVja0xvZ2luXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcblxuICAgIGNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGxheWdyb3VuZDogdHJ1ZSxcbiAgICAgICAgY29udGV4dDogKHsgcmVxIH06IGFueSkgPT4gKHsgcmVxIH0pXG4gICAgfSk7XG5cbiAgICBcblxuICAgIHNlcnZlci5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZlciBzdGFydGVkLCBiaXRjaFwiKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnN0IHNlcnZlckluZm8gPSBhd2FpdCBzZXJ2ZXIubGlzdGVuKFBPUlQpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiU0VSVkVFUiBTVEFSVEVEXCIpO1xufVxuXG5Cb290c3RyYXAoKSAiLCJpbXBvcnQgeyBGaWVsZCwgSW5wdXRUeXBlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuLy8gaW1wb3J0IHsgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbi8vIEBFbnRpdHkoKVxuQElucHV0VHlwZSgpXG5leHBvcnQgY2xhc3MgQ3JlYXRlUG9zdElucHV0IHtcbiAgICBARmllbGQoKVxuICAgIC8vIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgICBpZCE6IG51bWJlcjtcblxuICAgIEBGaWVsZCgpXG4gICAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG5cbiAgICBARmllbGQoe251bGxhYmxlOiB0cnVlfSlcbiAgICBjb21tZW50cz86IG51bWJlcjtcblxuICAgIEBGaWVsZCgpXG4gICAgbGlrZXM/OiBudW1iZXI7XG5cbiAgICBARmllbGQoKVxuICAgIG93bmVySWQhOiBudW1iZXI7XG5cbiAgICBARmllbGQoKVxuICAgIGlzQWN0aXZlITogYm9vbGVhbjtcbn0iLCJpbXBvcnQgeyBGaWVsZCwgSW5wdXRUeXBlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuXG5cblxuXG5ASW5wdXRUeXBlKClcbmV4cG9ydCBjbGFzcyBMb2dpbklucHV0IHtcbiAgICBARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuICAgIGVtYWlsPzogc3RyaW5nO1xuXG4gICAgQEZpZWxkKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgICB1c2VybmFtZT86IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgcGFzc3dvcmQhOiBzdHJpbmc7IFxuXG5cbn0iLCJpbXBvcnQgeyBJc0VtYWlsLCBMZW5ndGggfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBGaWVsZCwgSW5wdXRUeXBlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgSXNFbWFpbEFscmVhZHlFeGlzdCB9IGZyb20gXCIuLi92YWxpZGF0ZS92YWxpZGF0ZUVtYWlsXCI7XG5pbXBvcnQgeyBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0IH0gZnJvbSBcIi4uL3ZhbGlkYXRlL3ZhbGlkYXRlVXNlcm5hbWVcIjtcblxuQElucHV0VHlwZSgpXG5leHBvcnQgY2xhc3MgVXNlcklucHV0IHtcbiAgICBARmllbGQoKVxuICAgIEBMZW5ndGgoMSwgMTAwKVxuICAgIGZpcnN0TmFtZSE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgQExlbmd0aCgxLCAxMDApXG4gICAgbGFzdE5hbWUhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBJc0VtYWlsKClcbiAgICBASXNFbWFpbEFscmVhZHlFeGlzdCh7IG1lc3NhZ2U6IFwiZW1haWwgaXMgYWxyZWFkeSBpbiB1c2VcIiB9KVxuICAgIGVtYWlsITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBwYXNzd29yZCE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgQElzVXNlcm5hbWVBbHJlYWR5RXhpc3QoeyBtZXNzYWdlOiBcInVzZXJuYW1lIGlzIGFscmVhZHkgaW4gdXNlXCJ9KVxuICAgIHVzZXJuYW1lITogc3RyaW5nO1xuXG5cbiAgICBcbn0iLCJcbmltcG9ydCB7IEFyZywgTXV0YXRpb24sIFF1ZXJ5LCBSZXNvbHZlciB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IGdldFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgTG9naW5JbnB1dCB9IGZyb20gXCIuLi9pbnB1dFR5cGUvTG9naW5JbnB1dFwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vVXNlci91c2VyXCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgQ2hlY2tMb2dpbiB7XG4gICBcbiAgIFxuXG4gICAgLy8gQFF1ZXJ5KCgpID0+IFVzZXIpXG4gICAgLy8gYXN5bmMgTG9naW5DaGVjaygpOiBQcm9taXNlIDwgVXNlciB8IG51bGwgfCB2b2lkID4ge1xuICAgIC8vICAgICBjb25zdCBUaGVVc2VyID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShVc2VyKTtcbiAgICAgICAgXG5cbiAgICAvLyAgICAgcmV0dXJuIFRoZVVzZXIuZmluZE9uZSh7dXNlcm5hbWU6XCJyZXJlXCIgfSk7XG4gICAgLy8gICAgIH1cblxuXG4gICAgQE11dGF0aW9uKCgpID0+IFVzZXIpXG4gICAgYXN5bmMgTG9naW4oQEFyZyhcIkxvZ2luRGF0YVwiKSB0aGVQYXJhbWV0cjogTG9naW5JbnB1dCk6IFByb21pc2UgPCBVc2VyIHwgbnVsbCB8IHZvaWQgPiB7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgVGhlVXNlciA9IGF3YWl0IGdldFJlcG9zaXRvcnkoVXNlcik7XG4gICAgICAgICAgICBjb25zdCBUaGVFbWFpbCA9IHRoZVBhcmFtZXRyLmVtYWlsO1xuICAgICAgICAgICAgLy8gY29uc3QgZW1haWxPclVzZXJuYW1lXG4gICAgICAgICAgICBjb25zdCBUaGVVc2VybmFtZSA9IHRoZVBhcmFtZXRyLnVzZXJuYW1lO1xuICAgICAgICAgICAgY29uc3QgVGhlUGFzc3dvcmQgPSB0aGVQYXJhbWV0ci5wYXNzd29yZDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgRW1haWxGaW5kID0gYXdhaXQgVGhlVXNlci5maW5kT25lKHsgd2hlcmU6IHtlbWFpbDogVGhlRW1haWx9IH0pO1xuICAgICAgICAgICAgY29uc3QgVXNlcm5hbWVGaW5kID0gYXdhaXQgVGhlVXNlci5maW5kT25lKHsgd2hlcmU6IHt1c2VybmFtZTogVGhlVXNlcm5hbWUgfX0pOyAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsRmluZCcsIEVtYWlsRmluZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlcm5hbWVGaW5kJywgVXNlcm5hbWVGaW5kKTtcblxuICAgICAgICAgICAgaWYoIUVtYWlsRmluZCAmJiAhVXNlcm5hbWVGaW5kKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKEVtYWlsRmluZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFBhc3N3b3JkTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShUaGVQYXNzd29yZCwgRW1haWxGaW5kIS5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgaWYoIVBhc3N3b3JkTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRW1haWxGaW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXNlcm5hbWVGaW5kKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgUGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFRoZVBhc3N3b3JkLCBVc2VybmFtZUZpbmQhLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBpZighUGFzc3dvcmRNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVc2VybmFtZUZpbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG59IiwiXG5cbmV4cG9ydCBjb25zdCBQcml2YXRlS2V5ICA9ICAgYC0tLS0tQkVHSU4gUlNBIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUJQQUlCQUFKQkFNU1A0YjB4QjZkU0Q0eDlkYXVlRnVYNTYwbDlIUnlXb2VYQVUxVmErRVJjeFlRT3NqZm1cbll4S0IyeGVlbEs5MmViY3AxdWkxMGhBVHZiWmlCVzNjeGs4Q0F3RUFBUUpCQUlGelpLNnRrS1hRTkc5STNPc1dcblpXdzJDSS9RZHhDeDM1T284dmpldld4L0tSbUVIQmZ3a1VoS2o5a2RKZ1UvNW1wYzBXZ1dHNHo1V2RFcm5iOUhcbnVMa0NJUURnblhYS2dDMUZGbjc1ZUt0L2hxM2c1aEtYRFBnbVZUUFBsL1M2Wm5UTXl3SWhBT0FHOVFVdkdSdVBcbk1taHBRblhPb20vanJaWEdCZisrLzErRUV4dkRYeUFOQWlFQWxmSEh2b1ZPc3o1UFNXNzYzY2trcm13b29ObXhcbmxyVnVQdmtzRUh0eElYMENJRnp6aGdZNG5IcEsxK2RxaFNETU02bXBGZ1Rtdk9aNElRMUloNFVsY3ZxaEFpRUFcbnBtNTJFSW5UYjRrekwzU3NKcWdVd1RqZUZTVE03VTFoMjlqQVZMM2lOMjg9XG4tLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLWA7XG5cbmV4cG9ydCBjb25zdCBQdWJsaWNLZXkgPSBgLS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS1cbk1Gd3dEUVlKS29aSWh2Y05BUUVCQlFBRFN3QXdTQUpCQU1TUDRiMHhCNmRTRDR4OWRhdWVGdVg1NjBsOUhSeVdcbm9lWEFVMVZhK0VSY3hZUU9zamZtWXhLQjJ4ZWVsSzkyZWJjcDF1aTEwaEFUdmJaaUJXM2N4azhDQXdFQUFRPT1cbi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLWAiLCJpbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5leHBvcnQgdmFyIFNpZ25PcHRpb24gOmp3dC5TaWduT3B0aW9ucz0ge1xuICAgIGlzc3VlcjogXCJcIixcbiAgICBzdWJqZWN0OlwiXCIsXG4gICAgYXVkaWVuY2U6IFwiXCIsXG4gICAgZXhwaXJlc0luOiBcIjM2NWRcIixcbiAgICBhbGdvcml0aG06IFwiUlMyNTZcIlxufTsiLCJpbXBvcnQgeyByZWdpc3RlckRlY29yYXRvciwgVmFsaWRhdGlvbk9wdGlvbnMsIFZhbGlkYXRvckNvbnN0cmFpbnQsIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2UgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL1VzZXIvdXNlclwiO1xuLy8gaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZW50aXR5L09iamVjdFBvc3RcIjtcbiBcbiBcbi8vIEBWYWxpZGF0b3JDb25zdHJhaW50KHsgYXN5bmM6IHRydWUgfSlcbi8vIGV4cG9ydCBjbGFzcyBGaW5hbE93bmVySWRcbi8vICAgICBpbXBsZW1lbnRzIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2Uge1xuLy8gICAgIC8vIHZhbGlkYXRlKF9vd25lcklkOiBzdHJpbmcpOiBQcm9taXNlPFBvc3RPYmplY3RUeXBlIHwgbnVsbD4ge1xuLy8gICAgIC8vICAgICByZXR1cm4gXG4vLyAgICAgLy8gfVxuLy8gfVxuXG5AVmFsaWRhdG9yQ29uc3RyYWludCh7IGFzeW5jOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgSXNFbWFpbEFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICBpbXBsZW1lbnRzIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2Uge1xuICAgIHZhbGlkYXRlKGVtYWlsOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IGVtYWlsIH0gfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSXNFbWFpbEFscmVhZHlFeGlzdCh2YWxpZGF0ZU9wdGlvbnM/OiBWYWxpZGF0aW9uT3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3Q6IE9iamVjdCwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmVnaXN0ZXJEZWNvcmF0b3Ioe1xuICAgICAgICAgICAgdGFyZ2V0OiBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHZhbGlkYXRlT3B0aW9ucyxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzOiBbXSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogSXNFbWFpbEFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG59IiwiaW1wb3J0IHsgcmVnaXN0ZXJEZWNvcmF0b3IsIFZhbGlkYXRpb25PcHRpb25zLCBWYWxpZGF0b3JDb25zdHJhaW50LCBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL3VzZXJcIjtcblxuXG5cbkBWYWxpZGF0b3JDb25zdHJhaW50KHsgYXN5bmM6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0Q29uc3RyYWludFxuICAgIGltcGxlbWVudHMgVmFsaWRhdG9yQ29uc3RyYWludEludGVyZmFjZSB7XG4gICAgdmFsaWRhdGUodXNlcm5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gVXNlci5maW5kT25lKHsgd2hlcmU6IHsgdXNlcm5hbWUgfSB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0KHZhbGlkYXRlT3B0aW9ucz86IFZhbGlkYXRpb25PcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdDogT2JqZWN0LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xuICAgICAgICByZWdpc3RlckRlY29yYXRvcih7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgb3B0aW9uczogdmFsaWRhdGVPcHRpb25zLFxuICAgICAgICAgICAgY29uc3RyYWludHM6IFtdLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0Q29uc3RyYWludFxuICAgICAgICB9KTtcbiAgICB9O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy12YWxpZGF0b3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBlb3JtXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==