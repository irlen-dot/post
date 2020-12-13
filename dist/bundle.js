/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 939:
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
const LoginInput_1 = __webpack_require__(407);
const bcryptjs_1 = __importDefault(__webpack_require__(773));
const user_1 = __webpack_require__(287);
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

/***/ 205:
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
const ObjectPost_1 = __webpack_require__(685);
const InputPost_1 = __webpack_require__(25);
const checkInput_1 = __webpack_require__(940);
let PostResolver = class PostResolver {
    HelloBitch() {
        return __awaiter(this, void 0, void 0, function* () {
            return "HiBitch";
        });
    }
    saas(singleParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
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
    type_graphql_1.Mutation(() => ObjectPost_1.PostObjectType, { name: "createPostByInput", nullable: true }),
    type_graphql_1.UseMiddleware(checkInput_1.LogAccess),
    __param(0, type_graphql_1.Arg("singleParametr")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InputPost_1.CreatePostInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "saas", null);
PostResolver = __decorate([
    type_graphql_1.Resolver()
], PostResolver);
exports.PostResolver = PostResolver;


/***/ }),

/***/ 454:
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
const inputUser_1 = __webpack_require__(630);
const user_1 = __webpack_require__(287);
const keys_1 = __webpack_require__(841);
const signOption_1 = __webpack_require__(97);
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
const ResolvePost_1 = __webpack_require__(205);
const apollo_server_1 = __webpack_require__(232);
const typeorm_1 = __webpack_require__(794);
const ObjectPost_1 = __webpack_require__(685);
const ResolveUser_1 = __webpack_require__(454);
const user_1 = __webpack_require__(287);
const CheckLogin_1 = __webpack_require__(939);
const PORT = process.env.PORT || 4040;
function Bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const connectionPost = yield typeorm_1.createConnection({
            name: "default",
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "hellomik",
            password: "2106",
            database: "posts",
            synchronize: true,
            logging: true,
            entities: [ObjectPost_1.PostObjectType, user_1.User],
        });
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [ResolvePost_1.PostResolver, ResolveUser_1.UserResolver, CheckLogin_1.CheckLogin],
        });
        const production = "production" === "production";
        const server = new apollo_server_1.ApolloServer({
            schema: schema,
            playground: true,
            context: ({ req }) => ({ req }),
        });
        server.listen(PORT, () => {
            console.log("Server started, bitch");
        });
    });
}
Bootstrap();


/***/ }),

/***/ 940:
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogAccess = void 0;
const jwt = __importStar(__webpack_require__(722));
const LogAccess = ({ context, info }, next) => {
    console.log(info);
    const token = context.req.headers.authorization;
    console.log(jwt.decode(context.req.headers.authorization));
    console.log(context.req.headers.authorization);
    return next();
};
exports.LogAccess = LogAccess;


/***/ }),

/***/ 287:
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
const ObjectPost_1 = __webpack_require__(685);
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

/***/ 685:
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

/***/ 25:
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
    __metadata("design:type", String)
], CreatePostInput.prototype, "description", void 0);
CreatePostInput = __decorate([
    type_graphql_1.InputType()
], CreatePostInput);
exports.CreatePostInput = CreatePostInput;


/***/ }),

/***/ 407:
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

/***/ 630:
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

/***/ 841:
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

/***/ 97:
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
const user_1 = __webpack_require__(287);
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
const user_1 = __webpack_require__(287);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9SZW9sdmVycy9DaGVja0xvZ2luLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL1Jlb2x2ZXJzL1Jlc29sdmVQb3N0LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL1Jlb2x2ZXJzL1Jlc29sdmVVc2VyLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL21pZGRsZXdhcmUvY2hlY2tJbnB1dC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9Vc2VyL3VzZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvZW50aXR5L09iamVjdFBvc3QudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvaW5wdXRUeXBlL0lucHV0UG9zdC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9pbnB1dFR5cGUvTG9naW5JbnB1dC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9pbnB1dFR5cGUvaW5wdXRVc2VyLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3V0aWxpdGVzL3Rva2VuL2tleXMudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdXRpbGl0ZXMvdG9rZW4vc2lnbk9wdGlvbi50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy92YWxpZGF0ZS92YWxpZGF0ZUVtYWlsLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3ZhbGlkYXRlL3ZhbGlkYXRlVXNlcm5hbWUudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJiY3J5cHRqc1wiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwiY2xhc3MtdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcInJlZmxlY3QtbWV0YWRhdGFcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcInR5cGUtZ3JhcGhxbFwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwidHlwZW9ybVwiIiwid2VicGFjazovL2NvcHlzaGl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvcHlzaGl0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0RBQThEO0FBQzlELDJDQUF3QztBQUN4Qyw4Q0FBMkQ7QUFDM0QsNkRBQThCO0FBQzlCLHdDQUEwQztBQUcxQyxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBY2IsS0FBSyxDQUFtQixXQUF1Qjs7WUFFN0MsTUFBTSxPQUFPLEdBQUcsTUFBTSx1QkFBYSxDQUFDLFdBQUksQ0FBQyxDQUFDO1lBQzFDLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFFbkMsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUN6QyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBRXpDLE1BQU0sU0FBUyxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEUsTUFBTSxZQUFZLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFDLENBQUMsQ0FBQztZQUUvRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxZQUFZLENB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QUUsT0FBTyxLQUFLLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFSWSxnQ0FBZ0M7SUFENUMscUNBQW1CLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7R0FDeEIsZ0NBQWdDLENBUTVDO0FBUlksNEVBQWdDO0FBVTdDLFNBQWdCLHNCQUFzQixDQUFDLGVBQW1DO0lBQ3RFLE9BQU8sVUFBUyxNQUFjLEVBQUUsWUFBb0I7UUFDaEQsbUNBQWlCLENBQUM7WUFDZCxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVc7WUFDMUIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsT0FBTyxFQUFFLGVBQWU7WUFDeEIsV0FBVyxFQUFFLEVBQUU7WUFDZixTQUFTLEVBQUUsZ0NBQWdDO1NBQzlDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLENBQUM7QUFWRCx3REFVQzs7Ozs7Ozs7QUMxQkQsMkM7Ozs7Ozs7QUNBQSxzQzs7Ozs7OztBQ0FBLDZDOzs7Ozs7O0FDQUEsMEM7Ozs7Ozs7QUNBQSw4Qzs7Ozs7OztBQ0FBLDBDOzs7Ozs7O0FDQUEscUM7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBBcmcsIE11dGF0aW9uLCBRdWVyeSwgUmVzb2x2ZXIgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBnZXRSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7IExvZ2luSW5wdXQgfSBmcm9tIFwiLi4vdHlwZXMvaW5wdXRUeXBlL0xvZ2luSW5wdXRcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3R5cGVzL1VzZXIvdXNlclwiO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIENoZWNrTG9naW4ge1xuICAgXG4gICBcblxuICAgIC8vIEBRdWVyeSgoKSA9PiBVc2VyKVxuICAgIC8vIGFzeW5jIExvZ2luQ2hlY2soKTogUHJvbWlzZSA8IFVzZXIgfCBudWxsIHwgdm9pZCA+IHtcbiAgICAvLyAgICAgY29uc3QgVGhlVXNlciA9IGF3YWl0IGdldFJlcG9zaXRvcnkoVXNlcik7XG4gICAgICAgIFxuXG4gICAgLy8gICAgIHJldHVybiBUaGVVc2VyLmZpbmRPbmUoe3VzZXJuYW1lOlwicmVyZVwiIH0pO1xuICAgIC8vICAgICB9XG5cblxuICAgIEBNdXRhdGlvbigoKSA9PiBVc2VyKVxuICAgIGFzeW5jIExvZ2luKEBBcmcoXCJMb2dpbkRhdGFcIikgdGhlUGFyYW1ldHI6IExvZ2luSW5wdXQpOiBQcm9taXNlIDwgVXNlciB8IG51bGwgfCB2b2lkID4ge1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IFRoZVVzZXIgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFVzZXIpO1xuICAgICAgICAgICAgY29uc3QgVGhlRW1haWwgPSB0aGVQYXJhbWV0ci5lbWFpbDtcbiAgICAgICAgICAgIC8vIGNvbnN0IGVtYWlsT3JVc2VybmFtZVxuICAgICAgICAgICAgY29uc3QgVGhlVXNlcm5hbWUgPSB0aGVQYXJhbWV0ci51c2VybmFtZTtcbiAgICAgICAgICAgIGNvbnN0IFRoZVBhc3N3b3JkID0gdGhlUGFyYW1ldHIucGFzc3dvcmQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IEVtYWlsRmluZCA9IGF3YWl0IFRoZVVzZXIuZmluZE9uZSh7IHdoZXJlOiB7ZW1haWw6IFRoZUVtYWlsfSB9KTtcbiAgICAgICAgICAgIGNvbnN0IFVzZXJuYW1lRmluZCA9IGF3YWl0IFRoZVVzZXIuZmluZE9uZSh7IHdoZXJlOiB7dXNlcm5hbWU6IFRoZVVzZXJuYW1lIH19KTsgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbWFpbEZpbmQnLCBFbWFpbEZpbmQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXJuYW1lRmluZCcsIFVzZXJuYW1lRmluZCk7XG5cbiAgICAgICAgICAgIGlmKCFFbWFpbEZpbmQgJiYgIVVzZXJuYW1lRmluZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChFbWFpbEZpbmQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBQYXNzd29yZE1hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoVGhlUGFzc3dvcmQsIEVtYWlsRmluZCEucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGlmKCFQYXNzd29yZE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEVtYWlsRmluZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFVzZXJuYW1lRmluZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFBhc3N3b3JkTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShUaGVQYXNzd29yZCwgVXNlcm5hbWVGaW5kIS5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgaWYoIVBhc3N3b3JkTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVXNlcm5hbWVGaW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufSIsImltcG9ydCB7XG4gIEFyZyxcbiAgQXJncyxcbiAgTXV0YXRpb24sXG4gIFF1ZXJ5LFxuICBSZXNvbHZlcixcbiAgVXNlTWlkZGxld2FyZSxcbn0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvZW50aXR5L09iamVjdFBvc3RcIjtcblxuaW1wb3J0IHsgQ3JlYXRlUG9zdElucHV0IH0gZnJvbSBcIi4uL3R5cGVzL2lucHV0VHlwZS9JbnB1dFBvc3RcIjtcbmltcG9ydCB7IGdldFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgTG9nQWNjZXNzIH0gZnJvbSBcIi4uL21pZGRsZXdhcmUvY2hlY2tJbnB1dFwiO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIFBvc3RSZXNvbHZlciB7XG4gIEBRdWVyeSgoKSA9PiBTdHJpbmcpXG4gIGFzeW5jIEhlbGxvQml0Y2goKSB7XG4gICAgcmV0dXJuIFwiSGlCaXRjaFwiO1xuICB9XG5cbiAgQE11dGF0aW9uKCgpID0+IFBvc3RPYmplY3RUeXBlLCB7IG5hbWU6IFwiY3JlYXRlUG9zdEJ5SW5wdXRcIiwgbnVsbGFibGU6IHRydWUgfSlcbiAgQFVzZU1pZGRsZXdhcmUoTG9nQWNjZXNzKVxuICBhc3luYyBzYWFzKFxuICAgIEBBcmcoXCJzaW5nbGVQYXJhbWV0clwiKSBzaW5nbGVQYXJhbWV0cjogQ3JlYXRlUG9zdElucHV0XG4gICk6IFByb21pc2U8UG9zdE9iamVjdFR5cGUgfCBudWxsPiB7XG4gICAgLy8gY29uc3QgcmV0dXJuUG9zdCA9IG5ldyBQb3N0T2JqZWN0VHlwZSgpO1xuICAgIC8vIHJldHVyblBvc3QuZGVzY3JpcHRpb24gPSBzaW5nbGVQYXJhbWV0ci5kZXNjcmlwdGlvbjtcblxuICAgIC8vIHJldHVyblBvc3QuY29tbWVudHMgPSBzaW5nbGVQYXJhbWV0ci5jb21tZW50cztcbiAgICAvLyByZXR1cm5Qb3N0Lmxpa2VzID0gc2luZ2xlUGFyYW1ldHIubGlrZXM7XG4gICAgLy8gLy8gcmV0dXJuUG9zdC5pZCA9IHNpbmdsZVBhcmFtZXRyLmlkO1xuICAgIC8vIHJldHVyblBvc3QuaXNBY3RpdmUgPSBzaW5nbGVQYXJhbWV0ci5pc0FjdGl2ZTtcblxuICAgIC8vIGNvbnN0IHBvc3RSZXAgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFBvc3RPYmplY3RUeXBlKTtcbiAgICAvLyBwb3N0UmVwLnNhdmUocmV0dXJuUG9zdCk7XG4gICAgLy8gcmV0dXJuIHJldHVyblBvc3Q7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBBcmcsIE11dGF0aW9uLCBRdWVyeSwgUmVzb2x2ZXIgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBnZXRSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcbi8vIGltcG9ydCB7IE15Q29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L015Q29udGV4dFwiO1xuaW1wb3J0IHsgVXNlcklucHV0IH0gZnJvbSBcIi4uL3R5cGVzL2lucHV0VHlwZS9pbnB1dFVzZXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG5pbXBvcnQgeyBQcml2YXRlS2V5LCBQdWJsaWNLZXkgfSBmcm9tIFwiLi4vdXRpbGl0ZXMvdG9rZW4va2V5c1wiO1xuaW1wb3J0IHsgU2lnbk9wdGlvbiB9IGZyb20gXCIuLi91dGlsaXRlcy90b2tlbi9zaWduT3B0aW9uXCI7XG5pbXBvcnQgKiBhcyBqd3QgIGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuQFJlc29sdmVyKClcbmV4cG9ydCBjbGFzcyBVc2VyUmVzb2x2ZXIge1xuICAgIEBRdWVyeSgoKSA9PiBTdHJpbmcpXG4gICAgYXN5bmMgSGVsbG9CaXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIFwiSGlCaXRjaFwiO1xuICAgIH1cblxuICAgIC8vIEBNdXRhdGlvbigoKSA9PiBVc2VyKVxuICAgIC8vIGFzeW5jIHJlZ2lzdGVyKEBBcmcoXCJkYXRhXCIpIFNpbmdsZVBhcmFtZXRyOiBVc2VySW5wdXQpOiBQcm9taXNlPFVzZXIgfCBhbnk+IHtcbiAgICAvLyAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChTaW5nbGVQYXJhbWV0ci5wYXNzd29yZCwgMTIpXG5cbiAgICAvLyAgICAgY29uc3QgVXNlcm5hbWUgPSBgJHtTaW5nbGVQYXJhbWV0ci5maXJzdE5hbWV9IC4gJHtTaW5nbGVQYXJhbWV0ci5sYXN0TmFtZX1gXG5cbiAgICAvLyAgICAgLy8gY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAvLyAgICAgLy8gICAgIGZpcnN0TmFtZSxcbiAgICAvLyAgICAgLy8gICAgIGxhc3ROYW1lLFxuICAgIC8vICAgICAvLyAgICAgZW1haWwsXG4gICAgLy8gICAgIC8vICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXG4gICAgLy8gICAgIC8vICAgICB1c2VybmFtZTogVXNlcm5hbWVcbiAgICAvLyAgICAgLy8gfSkuc2F2ZSgpO1xuXG4gICAgLy8gICAgIGNvbnN0IHVzZXJSZXAgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFVzZXIpO1xuICAgIC8vICAgICB1c2VyUmVwLnNhdmUoe1NpbmdsZVBhcmFtZXRyLmZpcnN0TmFtZSwgfSlcblxuICAgIC8vICAgICByZXR1cm4gdXNlcjtcbiAgICAvLyB9XG5cbiAgICBATXV0YXRpb24oKCkgPT4gU3RyaW5nKVxuICAgIGFzeW5jIHJlZ2lzdGVyKEBBcmcoXCJVc2VyRGF0YVwiKSBzaW5nbGVQYXJhbWV0cjogVXNlcklucHV0KTogUHJvbWlzZTxTdHJpbmcgfCB2b2lkID4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmV0dXJuVXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIHJldHVyblVzZXIuZmlyc3ROYW1lID0gc2luZ2xlUGFyYW1ldHIuZmlyc3ROYW1lO1xuICAgICAgICByZXR1cm5Vc2VyLmxhc3ROYW1lID0gc2luZ2xlUGFyYW1ldHIubGFzdE5hbWU7XG4gICAgICAgIHJldHVyblVzZXIuZW1haWwgPSBzaW5nbGVQYXJhbWV0ci5lbWFpbDtcbiAgICAgICAgXG4gICAgICAgIHJldHVyblVzZXIucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChzaW5nbGVQYXJhbWV0ci5wYXNzd29yZCwgMTIpO1xuICAgICAgICByZXR1cm5Vc2VyLnVzZXJuYW1lID0gc2luZ2xlUGFyYW1ldHIudXNlcm5hbWU7XG4gICAgICAgIGF3YWl0IHJldHVyblVzZXIuc2F2ZSgpO1xuICAgICAgICBjb25zdCB0b2tlblVzZXIgPSBqd3Quc2lnbih7XG4gICAgICAgICAgICAgICAgaWQ6IHJldHVyblVzZXIuaWQsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiByZXR1cm5Vc2VyLmZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogcmV0dXJuVXNlci5sYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogcmV0dXJuVXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogcmV0dXJuVXNlci51c2VybmFtZSxcbiAgICAgICAgfSwgUHJpdmF0ZUtleSwgU2lnbk9wdGlvbik7XG4gICAgICAgIHJldHVyblVzZXIudG9rZW4gPSB0b2tlblVzZXI7XG4gICAgICAgIGF3YWl0IHJldHVyblVzZXIuc2F2ZSgpO1xuICAgICAgICByZXR1cm4gdG9rZW5Vc2VyO1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgeyBidWlsZFNjaGVtYSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IFBvc3RSZXNvbHZlciB9IGZyb20gXCIuL1Jlb2x2ZXJzL1Jlc29sdmVQb3N0XCI7XG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tIFwiYXBvbGxvLXNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBQb3N0T2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVzL2VudGl0eS9PYmplY3RQb3N0XCI7XG5pbXBvcnQgeyBVc2VyUmVzb2x2ZXIgfSBmcm9tIFwiLi9SZW9sdmVycy9SZXNvbHZlVXNlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3R5cGVzL1VzZXIvdXNlclwiO1xuaW1wb3J0IEV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IENoZWNrTG9naW4gfSBmcm9tIFwiLi9SZW9sdmVycy9DaGVja0xvZ2luXCI7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcImJvZHktcGFyc2VyXCI7XG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwNDA7XG5cbmFzeW5jIGZ1bmN0aW9uIEJvb3RzdHJhcCgpIHtcbiAgY29uc3QgY29ubmVjdGlvblBvc3QgPSBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKHtcbiAgICBuYW1lOiBcImRlZmF1bHRcIixcbiAgICB0eXBlOiBcInBvc3RncmVzXCIsXG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICBwb3J0OiA1NDMyLFxuICAgIHVzZXJuYW1lOiBcImhlbGxvbWlrXCIsXG4gICAgcGFzc3dvcmQ6IFwiMjEwNlwiLFxuICAgIGRhdGFiYXNlOiBcInBvc3RzXCIsXG4gICAgc3luY2hyb25pemU6IHRydWUsXG4gICAgbG9nZ2luZzogdHJ1ZSxcbiAgICBlbnRpdGllczogW1Bvc3RPYmplY3RUeXBlLCBVc2VyXSxcbiAgfSk7XG5cbiAgY29uc3Qgc2NoZW1hID0gYXdhaXQgYnVpbGRTY2hlbWEoe1xuICAgIHJlc29sdmVyczogW1Bvc3RSZXNvbHZlciwgVXNlclJlc29sdmVyLCBDaGVja0xvZ2luXSxcbiAgfSk7XG5cbiAgY29uc3QgcHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcblxuICBjb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICBwbGF5Z3JvdW5kOiB0cnVlLFxuICAgIGNvbnRleHQ6ICh7IHJlcSB9OiBhbnkpID0+ICh7IHJlcSB9KSxcbiAgfSk7XG5cbiAgc2VydmVyLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgc3RhcnRlZCwgYml0Y2hcIik7XG4gIH0pO1xuXG4gIC8vIGNvbnN0IHNlcnZlckluZm8gPSBhd2FpdCBzZXJ2ZXIubGlzdGVuKFBPUlQpO1xuICAvLyBjb25zb2xlLmxvZyhcIlNFUlZFRVIgU1RBUlRFRFwiKTtcbn1cblxuQm9vdHN0cmFwKCk7XG4iLCJpbXBvcnQgeyBNaWRkbGV3YXJlRm4gfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5leHBvcnQgY29uc3QgTG9nQWNjZXNzOiBNaWRkbGV3YXJlRm4gPSAoeyBjb250ZXh0LCBpbmZvIH0sIG5leHQpID0+IHtcbiAgY29uc29sZS5sb2coaW5mbyk7XG4gIGNvbnN0IHRva2VuID0gKGNvbnRleHQgYXMgYW55KS5yZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICBjb25zb2xlLmxvZyhqd3QuZGVjb2RlKChjb250ZXh0IGFzIGFueSkucmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbikpO1xuICBjb25zb2xlLmxvZygoY29udGV4dCBhcyBhbnkpLnJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pO1xuICByZXR1cm4gbmV4dCgpO1xufTtcbiIsImltcG9ydCB7IFJlcGxhY2VGaWVsZFdpdGhGcmFnbWVudCB9IGZyb20gXCJhcG9sbG8tc2VydmVyXCI7XG5pbXBvcnQgeyBGaWVsZCwgSUQsIE9iamVjdFR5cGUsIFJvb3QgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBCYXNlRW50aXR5LCBDb2x1bW4sIEVudGl0eSwgT25lVG9NYW55LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4uL2VudGl0eS9PYmplY3RQb3N0XCI7XG5cblxuQEVudGl0eSgpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIEJhc2VFbnRpdHkge1xuXG4gICAgQEZpZWxkKCgpID0+IElEKVxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKFwidXVpZFwiKVxuICAgIGlkITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKClcbiAgICBmaXJzdE5hbWUhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIGxhc3ROYW1lITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKFwidGV4dFwiLCB7IHVuaXF1ZTogdHJ1ZSB9KVxuICAgIGVtYWlsITogc3RyaW5nO1xuXG4gICAgLy8gQEZpZWxkKClcbiAgICBAQ29sdW1uKClcbiAgICBwYXNzd29yZCE6IHN0cmluZztcblxuICAgIC8vIEBGaWVsZCgpXG4gICAgLy8gdXNlcm5hbWUoQFJvb3QoKSBwYXJlbnQ6IFVzZXIpOiBTdHJpbmcge1xuICAgIC8vICAgICByZXR1cm4gYCR7cGFyZW50LmZpcnN0TmFtZX0gLiAke3BhcmVudC5sYXN0TmFtZX1gXG4gICAgLy8gfVxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbigpXG4gICAgdXNlcm5hbWUhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKCk9PltQb3N0T2JqZWN0VHlwZV0pXG4gICAgQE9uZVRvTWFueSgnUG9zdE9iamVjdFR5cGUnLCAocG9zdDogUG9zdE9iamVjdFR5cGUpID0+IHBvc3QudXNlciwge1xuICAgICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgICBvblVwZGF0ZTogJ0NBU0NBREUnXG4gICAgfSlcbiAgICBwb3N0cz86IEFycmF5PFBvc3RPYmplY3RUeXBlPlxuXG5cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxuICAgIHRva2VuITogc3RyaW5nO1xufVxuXG4iLCJpbXBvcnQgeyBPYmplY3RUeXBlLCBJRCwgRmllbGQgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBCYXNlRW50aXR5LCBDb2x1bW4sIEVudGl0eSwgSm9pbkNvbHVtbiwgSm9pblRhYmxlLCBNYW55VG9PbmUsIE9uZVRvT25lLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vVXNlci91c2VyXCI7XG5pbXBvcnQgeyAgfSBmcm9tIFwibW9kdWxlXCI7XG4gXG5ARW50aXR5KClcbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBQb3N0T2JqZWN0VHlwZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuICAgIEBGaWVsZCgoKSA9PiBJRClcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigndXVpZCcpXG4gICAgaWQhOiBudW1iZXI7XG4gXG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKHt0eXBlOiBcInRleHRcIn0pXG4gICAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG4gXG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKClcbiAgICBjb21tZW50cz86IG51bWJlcjtcbiBcbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIGxpa2VzPzogbnVtYmVyO1xuXG5cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIGlzQWN0aXZlITogYm9vbGVhbjtcblxuICAgIEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxuICAgIEBNYW55VG9PbmUoJ1VzZXInLCAodXNlcjogVXNlcikgPT4gdXNlci5pZClcbiAgICBvd25lcklkPzogc3RyaW5nO1xuXG4gICAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gICAgQE1hbnlUb09uZSgnVXNlcicsICh1c2VyOiBVc2VyKSA9PiB1c2VyLnBvc3RzKVxuICAgIHVzZXI/OiBzdHJpbmc7XG59IiwiaW1wb3J0IHsgRmllbGQsIElucHV0VHlwZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbi8vIGltcG9ydCB7IFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuXG4vLyBARW50aXR5KClcbkBJbnB1dFR5cGUoKVxuZXhwb3J0IGNsYXNzIENyZWF0ZVBvc3RJbnB1dCB7XG4gICAgXG4gICAgQEZpZWxkKClcbiAgICBkZXNjcmlwdGlvbiE6IHN0cmluZztcblxuICAgIFxufSIsImltcG9ydCB7IEZpZWxkLCBJbnB1dFR5cGUgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5cblxuXG5cbkBJbnB1dFR5cGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luSW5wdXQge1xuICAgIEBGaWVsZCh7IG51bGxhYmxlOiB0cnVlIH0pXG4gICAgZW1haWw/OiBzdHJpbmc7XG5cbiAgICBARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBwYXNzd29yZCE6IHN0cmluZzsgXG5cblxufSIsImltcG9ydCB7IElzRW1haWwsIExlbmd0aCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEZpZWxkLCBJbnB1dFR5cGUgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBJc0VtYWlsQWxyZWFkeUV4aXN0IH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRlL3ZhbGlkYXRlRW1haWxcIjtcbmltcG9ydCB7IElzVXNlcm5hbWVBbHJlYWR5RXhpc3QgfSBmcm9tIFwiLi4vLi4vdmFsaWRhdGUvdmFsaWRhdGVVc2VybmFtZVwiO1xuXG5ASW5wdXRUeXBlKClcbmV4cG9ydCBjbGFzcyBVc2VySW5wdXQge1xuICAgIEBGaWVsZCgpXG4gICAgQExlbmd0aCgxLCAxMDApXG4gICAgZmlyc3ROYW1lITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBATGVuZ3RoKDEsIDEwMClcbiAgICBsYXN0TmFtZSE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgQElzRW1haWwoKVxuICAgIEBJc0VtYWlsQWxyZWFkeUV4aXN0KHsgbWVzc2FnZTogXCJlbWFpbCBpcyBhbHJlYWR5IGluIHVzZVwiIH0pXG4gICAgZW1haWwhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIHBhc3N3b3JkITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBASXNVc2VybmFtZUFscmVhZHlFeGlzdCh7IG1lc3NhZ2U6IFwidXNlcm5hbWUgaXMgYWxyZWFkeSBpbiB1c2VcIn0pXG4gICAgdXNlcm5hbWUhOiBzdHJpbmc7XG5cblxuICAgIFxufSIsIlxuXG5leHBvcnQgY29uc3QgUHJpdmF0ZUtleSAgPSAgIGAtLS0tLUJFR0lOIFJTQSBQUklWQVRFIEtFWS0tLS0tXG5NSUlCUEFJQkFBSkJBTVNQNGIweEI2ZFNENHg5ZGF1ZUZ1WDU2MGw5SFJ5V29lWEFVMVZhK0VSY3hZUU9zamZtXG5ZeEtCMnhlZWxLOTJlYmNwMXVpMTBoQVR2YlppQlczY3hrOENBd0VBQVFKQkFJRnpaSzZ0a0tYUU5HOUkzT3NXXG5aV3cyQ0kvUWR4Q3gzNU9vOHZqZXZXeC9LUm1FSEJmd2tVaEtqOWtkSmdVLzVtcGMwV2dXRzR6NVdkRXJuYjlIXG51TGtDSVFEZ25YWEtnQzFGRm43NWVLdC9ocTNnNWhLWERQZ21WVFBQbC9TNlpuVE15d0loQU9BRzlRVXZHUnVQXG5NbWhwUW5YT29tL2pyWlhHQmYrKy8xK0VFeHZEWHlBTkFpRUFsZkhIdm9WT3N6NVBTVzc2M2Nra3Jtd29vTm14XG5sclZ1UHZrc0VIdHhJWDBDSUZ6emhnWTRuSHBLMStkcWhTRE1NNm1wRmdUbXZPWjRJUTFJaDRVbGN2cWhBaUVBXG5wbTUyRUluVGI0a3pMM1NzSnFnVXdUamVGU1RNN1UxaDI5akFWTDNpTjI4PVxuLS0tLS1FTkQgUlNBIFBSSVZBVEUgS0VZLS0tLS1gO1xuXG5leHBvcnQgY29uc3QgUHVibGljS2V5ID0gYC0tLS0tQkVHSU4gUFVCTElDIEtFWS0tLS0tXG5NRnd3RFFZSktvWklodmNOQVFFQkJRQURTd0F3U0FKQkFNU1A0YjB4QjZkU0Q0eDlkYXVlRnVYNTYwbDlIUnlXXG5vZVhBVTFWYStFUmN4WVFPc2pmbVl4S0IyeGVlbEs5MmViY3AxdWkxMGhBVHZiWmlCVzNjeGs4Q0F3RUFBUT09XG4tLS0tLUVORCBQVUJMSUMgS0VZLS0tLS1gIiwiaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuZXhwb3J0IHZhciBTaWduT3B0aW9uIDpqd3QuU2lnbk9wdGlvbnM9IHtcbiAgICBpc3N1ZXI6IFwiXCIsXG4gICAgc3ViamVjdDpcIlwiLFxuICAgIGF1ZGllbmNlOiBcIlwiLFxuICAgIGV4cGlyZXNJbjogXCIzNjVkXCIsXG4gICAgYWxnb3JpdGhtOiBcIlJTMjU2XCJcbn07IiwiaW1wb3J0IHsgcmVnaXN0ZXJEZWNvcmF0b3IsIFZhbGlkYXRpb25PcHRpb25zLCBWYWxpZGF0b3JDb25zdHJhaW50LCBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi90eXBlcy9Vc2VyL3VzZXJcIjtcbi8vIGltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4uL2VudGl0eS9PYmplY3RQb3N0XCI7XG4gXG4gXG4vLyBAVmFsaWRhdG9yQ29uc3RyYWludCh7IGFzeW5jOiB0cnVlIH0pXG4vLyBleHBvcnQgY2xhc3MgRmluYWxPd25lcklkXG4vLyAgICAgaW1wbGVtZW50cyBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIHtcbi8vICAgICAvLyB2YWxpZGF0ZShfb3duZXJJZDogc3RyaW5nKTogUHJvbWlzZTxQb3N0T2JqZWN0VHlwZSB8IG51bGw+IHtcbi8vICAgICAvLyAgICAgcmV0dXJuIFxuLy8gICAgIC8vIH1cbi8vIH1cblxuQFZhbGlkYXRvckNvbnN0cmFpbnQoeyBhc3luYzogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIElzRW1haWxBbHJlYWR5RXhpc3RDb25zdHJhaW50XG4gICAgaW1wbGVtZW50cyBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIHtcbiAgICB2YWxpZGF0ZShlbWFpbDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBVc2VyLmZpbmRPbmUoeyB3aGVyZTogeyBlbWFpbCB9IH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIElzRW1haWxBbHJlYWR5RXhpc3QodmFsaWRhdGVPcHRpb25zPzogVmFsaWRhdGlvbk9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0OiBPYmplY3QsIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJlZ2lzdGVyRGVjb3JhdG9yKHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBvcHRpb25zOiB2YWxpZGF0ZU9wdGlvbnMsXG4gICAgICAgICAgICBjb25zdHJhaW50czogW10sXG4gICAgICAgICAgICB2YWxpZGF0b3I6IElzRW1haWxBbHJlYWR5RXhpc3RDb25zdHJhaW50XG4gICAgICAgIH0pO1xuICAgIH07XG5cblxufSIsImltcG9ydCB7IHJlZ2lzdGVyRGVjb3JhdG9yLCBWYWxpZGF0aW9uT3B0aW9ucywgVmFsaWRhdG9yQ29uc3RyYWludCwgVmFsaWRhdG9yQ29uc3RyYWludEludGVyZmFjZSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG5cblxuXG5AVmFsaWRhdG9yQ29uc3RyYWludCh7IGFzeW5jOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgSXNVc2VybmFtZUFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICBpbXBsZW1lbnRzIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2Uge1xuICAgIHZhbGlkYXRlKHVzZXJuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJuYW1lIH0gfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSXNVc2VybmFtZUFscmVhZHlFeGlzdCh2YWxpZGF0ZU9wdGlvbnM/OiBWYWxpZGF0aW9uT3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3Q6IE9iamVjdCwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmVnaXN0ZXJEZWNvcmF0b3Ioe1xuICAgICAgICAgICAgdGFyZ2V0OiBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHZhbGlkYXRlT3B0aW9ucyxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzOiBbXSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogSXNVc2VybmFtZUFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICAgICAgfSk7XG4gICAgfTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3MtdmFsaWRhdG9yXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR5cGUtZ3JhcGhxbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oNjA3KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=