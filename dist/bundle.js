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

/***/ 969:
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
exports.ResolveComment = void 0;
const type_graphql_1 = __webpack_require__(885);
const InputComment_1 = __webpack_require__(648);
const ObjectComment_1 = __webpack_require__(606);
let ResolveComment = class ResolveComment {
    Hi() {
        return __awaiter(this, void 0, void 0, function* () {
            return "Hi";
        });
    }
    CommentResolver(SingleParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            const ComObj = new ObjectComment_1.ObjectComment();
            ComObj.body = SingleParametr.body;
            console.log(yield ComObj.save());
            return ComObj;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResolveComment.prototype, "Hi", null);
__decorate([
    type_graphql_1.Mutation(() => ObjectComment_1.ObjectComment),
    __param(0, type_graphql_1.Arg("DataComment")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InputComment_1.InputComment]),
    __metadata("design:returntype", Promise)
], ResolveComment.prototype, "CommentResolver", null);
ResolveComment = __decorate([
    type_graphql_1.Resolver()
], ResolveComment);
exports.ResolveComment = ResolveComment;


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
const typeorm_1 = __webpack_require__(794);
const checkInput_1 = __webpack_require__(940);
let PostResolver = class PostResolver {
    HelloBitch() {
        return __awaiter(this, void 0, void 0, function* () {
            return "HiBitch";
        });
    }
    saas(singleParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            const returnPost = new ObjectPost_1.PostObjectType();
            returnPost.description = singleParametr.description;
            const postRep = yield typeorm_1.getRepository(ObjectPost_1.PostObjectType);
            yield postRep.save(returnPost);
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
    type_graphql_1.UseMiddleware(checkInput_1.isAuth),
    type_graphql_1.Mutation(() => ObjectPost_1.PostObjectType, { name: "createPostByInput", nullable: true }),
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
const checkInput_1 = __webpack_require__(940);
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
    type_graphql_1.UseMiddleware(checkInput_1.isAuth),
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
const ResolveComment_1 = __webpack_require__(969);
const ObjectComment_1 = __webpack_require__(606);
const PORT = process.env.PORT || 4040;
function Bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const connectionPost = yield typeorm_1.createConnection({
            name: "default",
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "irlenturlykhanov",
            password: "1234",
            database: "posts",
            synchronize: true,
            logging: true,
            entities: [ObjectPost_1.PostObjectType, user_1.User, ObjectComment_1.ObjectComment],
        });
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [ResolvePost_1.PostResolver, ResolveUser_1.UserResolver, CheckLogin_1.CheckLogin, ResolveComment_1.ResolveComment],
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
exports.isAuth = void 0;
const jwt = __importStar(__webpack_require__(722));
const keys_1 = __webpack_require__(841);
const isAuth = ({ info, context }, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(info);
    console.log(info.fieldName);
    if (info.fieldName == "Login" || info.fieldName == "register") {
        return next();
    }
    console.log(context.req.header.authorization);
    console.log(jwt.decode(context.req.header.authorization));
    if (!jwt.verify(context.req.header.authorization, keys_1.PublicKey)) {
        throw new Error('no authorization');
    }
    return next();
});
exports.isAuth = isAuth;


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

/***/ 606:
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
exports.ObjectComment = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
let ObjectComment = class ObjectComment extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], ObjectComment.prototype, "CommentId", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.ManyToOne('User', (user) => user.username),
    __metadata("design:type", String)
], ObjectComment.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], ObjectComment.prototype, "body", void 0);
ObjectComment = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], ObjectComment);
exports.ObjectComment = ObjectComment;


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

/***/ 648:
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
exports.InputComment = void 0;
const type_graphql_1 = __webpack_require__(885);
let InputComment = class InputComment {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InputComment.prototype, "body", void 0);
InputComment = __decorate([
    type_graphql_1.InputType()
], InputComment);
exports.InputComment = InputComment;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9SZW9sdmVycy9DaGVja0xvZ2luLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL1Jlb2x2ZXJzL1Jlc29sdmVDb21tZW50LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL1Jlb2x2ZXJzL1Jlc29sdmVQb3N0LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL1Jlb2x2ZXJzL1Jlc29sdmVVc2VyLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL21pZGRsZXdhcmUvY2hlY2tJbnB1dC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9Vc2VyL3VzZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvZW50aXR5L09iamVjdENvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvZW50aXR5L09iamVjdFBvc3QudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvaW5wdXRUeXBlL0lucHV0Q29tbWVudC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9pbnB1dFR5cGUvSW5wdXRQb3N0LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3R5cGVzL2lucHV0VHlwZS9Mb2dpbklucHV0LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3R5cGVzL2lucHV0VHlwZS9pbnB1dFVzZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdXRpbGl0ZXMvdG9rZW4va2V5cy50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy91dGlsaXRlcy90b2tlbi9zaWduT3B0aW9uLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3ZhbGlkYXRlL3ZhbGlkYXRlRW1haWwudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdmFsaWRhdGUvdmFsaWRhdGVVc2VybmFtZS50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImJjcnlwdGpzXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJjbGFzcy12YWxpZGF0b3JcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwicmVmbGVjdC1tZXRhZGF0YVwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwidHlwZS1ncmFwaHFsXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJ0eXBlb3JtXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29weXNoaXQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnREFBNkU7QUFDN0UsMkNBQXdDO0FBQ3hDLDhDQUEyRDtBQUMzRCw2REFBOEI7QUFDOUIsd0NBQTBDO0FBRzFDLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUFlYixLQUFLLENBQW1CLFdBQXVCOztZQUU3QyxNQUFNLE9BQU8sR0FBRyxNQUFNLHVCQUFhLENBQUMsV0FBSSxDQUFDLENBQUM7WUFDMUMsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUVuQyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ3pDLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFFekMsTUFBTSxTQUFTLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQztZQUN0RSxNQUFNLFlBQVksR0FBRyxNQUFN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O0FDQUEsc0M7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLDBDOzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7QUNBQSwwQzs7Ozs7OztBQ0FBLHFDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQXJnLCBNdXRhdGlvbiwgUXVlcnksIFJlc29sdmVyLCBVc2VNaWRkbGV3YXJlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBMb2dpbklucHV0IH0gZnJvbSBcIi4uL3R5cGVzL2lucHV0VHlwZS9Mb2dpbklucHV0XCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi90eXBlcy9Vc2VyL3VzZXJcIjtcblxuQFJlc29sdmVyKClcbmV4cG9ydCBjbGFzcyBDaGVja0xvZ2luIHtcbiAgIFxuICAgXG5cbiAgICAvLyBAUXVlcnkoKCkgPT4gVXNlcilcbiAgICAvLyBhc3luYyBMb2dpbkNoZWNrKCk6IFByb21pc2UgPCBVc2VyIHwgbnVsbCB8IHZvaWQgPiB7XG4gICAgLy8gICAgIGNvbnN0IFRoZVVzZXIgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFVzZXIpO1xuICAgICAgICBcblxuICAgIC8vICAgICByZXR1cm4gVGhlVXNlci5maW5kT25lKHt1c2VybmFtZTpcInJlcmVcIiB9KTtcbiAgICAvLyAgICAgfVxuXG5cbiAgICBATXV0YXRpb24oKCkgPT4gVXNlcilcbiAgICAvLyBAVXNlTWlkZGxld2FyZShMb2dBY2Nlc3MpXG4gICAgYXN5bmMgTG9naW4oQEFyZyhcIkxvZ2luRGF0YVwiKSB0aGVQYXJhbWV0cjogTG9naW5JbnB1dCk6IFByb21pc2UgPCBVc2VyIHwgbnVsbCB8IHZvaWQgPiB7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgVGhlVXNlciA9IGF3YWl0IGdldFJlcG9zaXRvcnkoVXNlcik7XG4gICAgICAgICAgICBjb25zdCBUaGVFbWFpbCA9IHRoZVBhcmFtZXRyLmVtYWlsO1xuICAgICAgICAgICAgLy8gY29uc3QgZW1haWxPclVzZXJuYW1lXG4gICAgICAgICAgICBjb25zdCBUaGVVc2VybmFtZSA9IHRoZVBhcmFtZXRyLnVzZXJuYW1lO1xuICAgICAgICAgICAgY29uc3QgVGhlUGFzc3dvcmQgPSB0aGVQYXJhbWV0ci5wYXNzd29yZDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgRW1haWxGaW5kID0gYXdhaXQgVGhlVXNlci5maW5kT25lKHsgd2hlcmU6IHtlbWFpbDogVGhlRW1haWx9IH0pO1xuICAgICAgICAgICAgY29uc3QgVXNlcm5hbWVGaW5kID0gYXdhaXQgVGhlVXNlci5maW5kT25lKHsgd2hlcmU6IHt1c2VybmFtZTogVGhlVXNlcm5hbWUgfX0pOyAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsRmluZCcsIEVtYWlsRmluZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlcm5hbWVGaW5kJywgVXNlcm5hbWVGaW5kKTtcblxuICAgICAgICAgICAgaWYoIUVtYWlsRmluZCAmJiAhVXNlcm5hbWVGaW5kKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gIG51bGw7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoRW1haWxGaW5kKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgUGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFRoZVBhc3N3b3JkLCBFbWFpbEZpbmQhLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBpZighUGFzc3dvcmRNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBFbWFpbEZpbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVc2VybmFtZUZpbmQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBQYXNzd29yZE1hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoVGhlUGFzc3dvcmQsIFVzZXJuYW1lRmluZCEucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGlmKCFQYXNzd29yZE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFVzZXJuYW1lRmluZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbn0iLCJpbXBvcnQgeyBBcmcsIE11dGF0aW9uLCBRdWVyeSwgUmVzb2x2ZXIgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBJbnB1dENvbW1lbnQgfSBmcm9tIFwiLi4vdHlwZXMvaW5wdXRUeXBlL0lucHV0Q29tbWVudFwiO1xuaW1wb3J0IHsgT2JqZWN0Q29tbWVudCB9IGZyb20gXCIuLi90eXBlcy9lbnRpdHkvT2JqZWN0Q29tbWVudFwiO1xuaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvZW50aXR5L09iamVjdFBvc3RcIjtcbmltcG9ydCB7IEVudGl0eSwgZ2V0TWFuYWdlciwgZ2V0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgUmVzb2x2ZUNvbW1lbnQge1xuICAgIEBRdWVyeSgoKSA9PiBTdHJpbmcpXG4gICAgYXN5bmMgSGkoKSB7XG4gICAgICAgIHJldHVybiBcIkhpXCI7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIEBNdXRhdGlvbigoKSA9PiBPYmplY3RDb21tZW50KVxuICAgIGFzeW5jIENvbW1lbnRSZXNvbHZlcihcbiAgICAgICAgQEFyZyhcIkRhdGFDb21tZW50XCIpIFNpbmdsZVBhcmFtZXRyOiBJbnB1dENvbW1lbnRcbiAgICApOiBQcm9taXNlPCBPYmplY3RDb21tZW50IHwgIFBvc3RPYmplY3RUeXBlIHwgbnVsbD4ge1xuICAgICAgICBjb25zdCBDb21PYmogPSBuZXcgT2JqZWN0Q29tbWVudCgpO1xuICAgICAgICAvLyBjb25zdCBQb3N0T2JqID0gbmV3IFBvc3RPYmplY3RUeXBlKCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgQ29tT2JqLmJvZHkgPSBTaW5nbGVQYXJhbWV0ci5ib2R5O1xuICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBDb21PYmouc2F2ZSgpKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBDb21PYmo7XG5cblxuICAgIH1cbn0iLCJpbXBvcnQge1xuICBBcmcsXG4gIC8vIEFyZ3MsXG4gIE11dGF0aW9uLFxuICBRdWVyeSxcbiAgUmVzb2x2ZXIsXG4gIFVzZU1pZGRsZXdhcmUsXG4gIC8vIFVzZU1pZGRsZXdhcmUsXG59IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVzL2VudGl0eS9PYmplY3RQb3N0XCI7XG5cbmltcG9ydCB7IENyZWF0ZVBvc3RJbnB1dCB9IGZyb20gXCIuLi90eXBlcy9pbnB1dFR5cGUvSW5wdXRQb3N0XCI7XG5pbXBvcnQgeyBnZXRSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcblxuLy8gaW1wb3J0IHsgTG9nQWNjZXNzIH0gZnJvbSBcIi4uL21pZGRsZXdhcmUvY2hlY2tJbnB1dFwiO1xuXG5pbXBvcnQgeyBJbnB1dENvbW1lbnQgfSBmcm9tIFwiLi4vdHlwZXMvaW5wdXRUeXBlL0lucHV0Q29tbWVudFwiO1xuaW1wb3J0IHsgaXNBdXRoIH0gZnJvbSBcIi4uL21pZGRsZXdhcmUvY2hlY2tJbnB1dFwiO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIFBvc3RSZXNvbHZlciB7XG4gIEBRdWVyeSgoKSA9PiBTdHJpbmcpXG4gIGFzeW5jIEhlbGxvQml0Y2goKSB7XG4gICAgcmV0dXJuIFwiSGlCaXRjaFwiO1xuICB9XG5cbiAgQFVzZU1pZGRsZXdhcmUoaXNBdXRoKVxuICBATXV0YXRpb24oKCkgPT4gUG9zdE9iamVjdFR5cGUsIHsgbmFtZTogXCJjcmVhdGVQb3N0QnlJbnB1dFwiLCBudWxsYWJsZTogdHJ1ZSB9KVxuICAvLyBAVXNlTWlkZGxld2FyZShMb2dBY2Nlc3MpXG4gIGFzeW5jIHNhYXMoXG4gICAgQEFyZyhcInNpbmdsZVBhcmFtZXRyXCIpIHNpbmdsZVBhcmFtZXRyOiBDcmVhdGVQb3N0SW5wdXRcbiAgKTogUHJvbWlzZTxQb3N0T2JqZWN0VHlwZSB8IG51bGw+IHtcbiAgICBjb25zdCByZXR1cm5Qb3N0ID0gbmV3IFBvc3RPYmplY3RUeXBlKCk7XG4gICAgcmV0dXJuUG9zdC5kZXNjcmlwdGlvbiA9IHNpbmdsZVBhcmFtZXRyLmRlc2NyaXB0aW9uO1xuICAgIFxuICAgIC8vIHJldHVyblBvc3QuY29tbWVudHMgPSBzaW5nbGVQYXJhbWV0ci5jb21tZW50cztcbiAgICAvLyByZXR1cm5Qb3N0Lmxpa2VzID0gc2luZ2xlUGFyYW1ldHIubGlrZXM7XG4gICAgLy8gcmV0dXJuUG9zdC5pZCA9IHNpbmdsZVBhcmFtZXRyLmlkO1xuICAgIC8vIHJldHVyblBvc3QuaXNBY3RpdmUgPSBzaW5nbGVQYXJhbWV0ci5pc0FjdGl2ZTtcblxuICAgIGNvbnN0IHBvc3RSZXAgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFBvc3RPYmplY3RUeXBlKTtcbiAgICAvLyBjb25zdCBDb21tZW50UG9zdCA9IGF3YWl0IHBvc3RSZXAuZmluZCh7IHJlbGF0aW9uczogW2NvbW1lbnRzXSB9KTtcbiAgIFxuXG4gICAgYXdhaXQgcG9zdFJlcC5zYXZlKHJldHVyblBvc3QpO1xuICAgIHJldHVybiByZXR1cm5Qb3N0O1xuICAgIFxuICB9XG59XG4iLCJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgQXJnLCBNdXRhdGlvbiwgUXVlcnksIFJlc29sdmVyLCBVc2VNaWRkbGV3YXJlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XG4vLyBpbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9NeUNvbnRleHRcIjtcbmltcG9ydCB7IFVzZXJJbnB1dCB9IGZyb20gXCIuLi90eXBlcy9pbnB1dFR5cGUvaW5wdXRVc2VyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3R5cGVzL1VzZXIvdXNlclwiO1xuaW1wb3J0IHsgUHJpdmF0ZUtleSwgUHVibGljS2V5IH0gZnJvbSBcIi4uL3V0aWxpdGVzL3Rva2VuL2tleXNcIjtcbmltcG9ydCB7IFNpZ25PcHRpb24gfSBmcm9tIFwiLi4vdXRpbGl0ZXMvdG9rZW4vc2lnbk9wdGlvblwiO1xuaW1wb3J0ICogYXMgand0ICBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBpc0F1dGggfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9jaGVja0lucHV0XCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmVyIHtcbiAgICBAVXNlTWlkZGxld2FyZShpc0F1dGgpXG4gICAgQFF1ZXJ5KCgpID0+IFN0cmluZylcbiAgICBhc3luYyBIZWxsb0JpdGNoKCkge1xuICAgICAgICByZXR1cm4gXCJIaUJpdGNoXCI7XG4gICAgfVxuXG4gICAgLy8gQE11dGF0aW9uKCgpID0+IFVzZXIpXG4gICAgLy8gYXN5bmMgcmVnaXN0ZXIoQEFyZyhcImRhdGFcIikgU2luZ2xlUGFyYW1ldHI6IFVzZXJJbnB1dCk6IFByb21pc2U8VXNlciB8IGFueT4ge1xuICAgIC8vICAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKFNpbmdsZVBhcmFtZXRyLnBhc3N3b3JkLCAxMilcblxuICAgIC8vICAgICBjb25zdCBVc2VybmFtZSA9IGAke1NpbmdsZVBhcmFtZXRyLmZpcnN0TmFtZX0gLiAke1NpbmdsZVBhcmFtZXRyLmxhc3ROYW1lfWBcblxuICAgIC8vICAgICAvLyBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgIC8vICAgICAvLyAgICAgZmlyc3ROYW1lLFxuICAgIC8vICAgICAvLyAgICAgbGFzdE5hbWUsXG4gICAgLy8gICAgIC8vICAgICBlbWFpbCxcbiAgICAvLyAgICAgLy8gICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAvLyAgICAgLy8gICAgIHVzZXJuYW1lOiBVc2VybmFtZVxuICAgIC8vICAgICAvLyB9KS5zYXZlKCk7XG5cbiAgICAvLyAgICAgY29uc3QgdXNlclJlcCA9IGF3YWl0IGdldFJlcG9zaXRvcnkoVXNlcik7XG4gICAgLy8gICAgIHVzZXJSZXAuc2F2ZSh7U2luZ2xlUGFyYW1ldHIuZmlyc3ROYW1lLCB9KVxuXG4gICAgLy8gICAgIHJldHVybiB1c2VyO1xuICAgIC8vIH1cblxuICAgIEBNdXRhdGlvbigoKSA9PiBTdHJpbmcpXG4gICAgYXN5bmMgcmVnaXN0ZXIoQEFyZyhcIlVzZXJEYXRhXCIpIHNpbmdsZVBhcmFtZXRyOiBVc2VySW5wdXQpOiBQcm9taXNlPFN0cmluZyB8IHZvaWQgPiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXR1cm5Vc2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgcmV0dXJuVXNlci5maXJzdE5hbWUgPSBzaW5nbGVQYXJhbWV0ci5maXJzdE5hbWU7XG4gICAgICAgIHJldHVyblVzZXIubGFzdE5hbWUgPSBzaW5nbGVQYXJhbWV0ci5sYXN0TmFtZTtcbiAgICAgICAgcmV0dXJuVXNlci5lbWFpbCA9IHNpbmdsZVBhcmFtZXRyLmVtYWlsO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuVXNlci5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHNpbmdsZVBhcmFtZXRyLnBhc3N3b3JkLCAxMik7XG4gICAgICAgIHJldHVyblVzZXIudXNlcm5hbWUgPSBzaW5nbGVQYXJhbWV0ci51c2VybmFtZTtcbiAgICAgICAgYXdhaXQgcmV0dXJuVXNlci5zYXZlKCk7XG4gICAgICAgIGNvbnN0IHRva2VuVXNlciA9IGp3dC5zaWduKHtcbiAgICAgICAgICAgICAgICBpZDogcmV0dXJuVXNlci5pZCxcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHJldHVyblVzZXIuZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiByZXR1cm5Vc2VyLmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiByZXR1cm5Vc2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiByZXR1cm5Vc2VyLnVzZXJuYW1lLFxuICAgICAgICB9LCBQcml2YXRlS2V5LCBTaWduT3B0aW9uKTtcbiAgICAgICAgcmV0dXJuVXNlci50b2tlbiA9IHRva2VuVXNlcjtcbiAgICAgICAgYXdhaXQgcmV0dXJuVXNlci5zYXZlKCk7XG4gICAgICAgIHJldHVybiB0b2tlblVzZXI7XG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGJ1aWxkU2NoZW1hIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgUG9zdFJlc29sdmVyIH0gZnJvbSBcIi4vUmVvbHZlcnMvUmVzb2x2ZVBvc3RcIjtcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gXCJhcG9sbG8tc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZXMvZW50aXR5L09iamVjdFBvc3RcIjtcbmltcG9ydCB7IFVzZXJSZXNvbHZlciB9IGZyb20gXCIuL1Jlb2x2ZXJzL1Jlc29sdmVVc2VyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdHlwZXMvVXNlci91c2VyXCI7XG4vLyBpbXBvcnQgRXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgQ2hlY2tMb2dpbiB9IGZyb20gXCIuL1Jlb2x2ZXJzL0NoZWNrTG9naW5cIjtcbi8vIGltcG9ydCB7IGpzb24gfSBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCB7IFJlc29sdmVDb21tZW50IH0gZnJvbSBcIi4vUmVvbHZlcnMvUmVzb2x2ZUNvbW1lbnRcIjtcbmltcG9ydCB7IE9iamVjdENvbW1lbnQgfSBmcm9tIFwiLi90eXBlcy9lbnRpdHkvT2JqZWN0Q29tbWVudFwiO1xuaW1wb3J0IHsgaXNBdXRoIH0gZnJvbSBcIi4vbWlkZGxld2FyZS9jaGVja0lucHV0XCI7XG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwNDA7XG5cbmFzeW5jIGZ1bmN0aW9uIEJvb3RzdHJhcCgpIHtcbiAgY29uc3QgY29ubmVjdGlvblBvc3QgPSBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKHtcbiAgICBuYW1lOiBcImRlZmF1bHRcIixcbiAgICB0eXBlOiBcInBvc3RncmVzXCIsXG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICBwb3J0OiA1NDMyLFxuICAgIHVzZXJuYW1lOiBcImlybGVudHVybHlraGFub3ZcIixcbiAgICBwYXNzd29yZDogXCIxMjM0XCIsXG4gICAgZGF0YWJhc2U6IFwicG9zdHNcIixcbiAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICBsb2dnaW5nOiB0cnVlLFxuICAgIGVudGl0aWVzOiBbUG9zdE9iamVjdFR5cGUsIFVzZXIsIE9iamVjdENvbW1lbnRdLFxuICB9KTtcblxuICBjb25zdCBzY2hlbWEgPSBhd2FpdCBidWlsZFNjaGVtYSh7XG4gICAgcmVzb2x2ZXJzOiBbUG9zdFJlc29sdmVyLCBVc2VyUmVzb2x2ZXIsIENoZWNrTG9naW4sIFJlc29sdmVDb21tZW50XSxcbiAgICAvLyBnbG9iYWxNaWRkbGV3YXJlczpbaXNBdXRoXVxuICB9KTtcblxuICBjb25zdCBwcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xuXG4gIGNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgIHNjaGVtYTogc2NoZW1hLFxuICAgIHBsYXlncm91bmQ6IHRydWUsXG4gICAgY29udGV4dDogKHsgcmVxIH06IGFueSkgPT4gKHsgcmVxIH0pLFxuICB9KTtcblxuICBzZXJ2ZXIubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNlcnZlciBzdGFydGVkLCBiaXRjaFwiKTtcbiAgfSk7XG5cbiAgLy8gY29uc3Qgc2VydmVySW5mbyA9IGF3YWl0IHNlcnZlci5saXN0ZW4oUE9SVCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiU0VSVkVFUiBTVEFSVEVEXCIpO1xufVxuXG5Cb290c3RyYXAoKTtcbiIsImltcG9ydCB7IE1pZGRsZXdhcmVGbiB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3R5cGVzL1VzZXIvdXNlclwiO1xuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXMvY29udGV4dC9NeUNvbnRleHRcIjtcbmltcG9ydCB7IFByaXZhdGVLZXksIFB1YmxpY0tleSB9IGZyb20gXCIuLi91dGlsaXRlcy90b2tlbi9rZXlzXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBMb2dBY2Nlc3M6IE1pZGRsZXdhcmVGbiA9ICh7IGNvbnRleHQsIGluZm8gfSwgbmV4dCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhpbmZvKTtcbi8vICAgY29uc3QgdG9rZW4gPSAoY29udGV4dCBhcyBhbnkpLnJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XG4vLyAgIGNvbnNvbGUubG9nKGp3dC5kZWNvZGUoKGNvbnRleHQgYXMgYW55KS5yZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKSk7XG4vLyAgIGNvbnNvbGUubG9nKChjb250ZXh0IGFzIGFueSkucmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbik7XG4vLyAgIHJldHVybiBuZXh0KCk7XG4vLyB9O1xuXG5leHBvcnQgY29uc3QgaXNBdXRoOiBNaWRkbGV3YXJlRm48TXlDb250ZXh0PiA9IGFzeW5jIChcbiAgeyBpbmZvLCBjb250ZXh0IH0sXG4gIG5leHRcbikgPT4ge1xuICBjb25zb2xlLmxvZyhpbmZvKTtcbiAgY29uc29sZS5sb2coaW5mby5maWVsZE5hbWUpO1xuICBcbiAgaWYgKGluZm8uZmllbGROYW1lID09IFwiTG9naW5cIiB8fCBpbmZvLmZpZWxkTmFtZSA9PSBcInJlZ2lzdGVyXCIpIHtcbiAgICByZXR1cm4gbmV4dCgpO1xuICB9XG4gIGNvbnNvbGUubG9nKChjb250ZXh0IGFzIGFueSkucmVxLmhlYWRlci5hdXRob3JpemF0aW9uKTtcbiAgY29uc29sZS5sb2coand0LmRlY29kZSgoY29udGV4dCBhcyBhbnkpLnJlcS5oZWFkZXIuYXV0aG9yaXphdGlvbikpO1xuICBpZiAoIWp3dC52ZXJpZnkoKGNvbnRleHQgYXMgYW55KS5yZXEuaGVhZGVyLmF1dGhvcml6YXRpb24sIFB1YmxpY0tleSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF1dGhvcml6YXRpb24nKTtcbiAgfVxuXG4gIHJldHVybiBuZXh0KCk7XG59O1xuIiwiaW1wb3J0IHsgUmVwbGFjZUZpZWxkV2l0aEZyYWdtZW50IH0gZnJvbSBcImFwb2xsby1zZXJ2ZXJcIjtcbmltcG9ydCB7IEZpZWxkLCBJRCwgT2JqZWN0VHlwZSwgUm9vdCB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IEJhc2VFbnRpdHksIENvbHVtbiwgRW50aXR5LCBPbmVUb01hbnksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZW50aXR5L09iamVjdFBvc3RcIjtcblxuXG5ARW50aXR5KClcbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZUVudGl0eSB7XG5cbiAgICBARmllbGQoKCkgPT4gSUQpXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oXCJ1dWlkXCIpXG4gICAgaWQhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIGZpcnN0TmFtZSE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbigpXG4gICAgbGFzdE5hbWUhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oXCJ0ZXh0XCIsIHsgdW5pcXVlOiB0cnVlIH0pXG4gICAgZW1haWwhOiBzdHJpbmc7XG5cbiAgICAvLyBARmllbGQoKVxuICAgIEBDb2x1bW4oKSBcbiAgICBwYXNzd29yZCE6IHN0cmluZztcblxuICAgIC8vIEBGaWVsZCgpXG4gICAgLy8gdXNlcm5hbWUoQFJvb3QoKSBwYXJlbnQ6IFVzZXIpOiBTdHJpbmcge1xuICAgIC8vICAgICByZXR1cm4gYCR7cGFyZW50LmZpcnN0TmFtZX0gLiAke3BhcmVudC5sYXN0TmFtZX1gXG4gICAgLy8gfVxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbigpXG4gICAgdXNlcm5hbWUhOiBzdHJpbmc7XG5cbiAgICAvLyBARmllbGQoKCk9PltQb3N0T2JqZWN0VHlwZV0pXG4gICAgLy8gQE9uZVRvTWFueSgnUG9zdE9iamVjdFR5cGUnLCAocG9zdDogUG9zdE9iamVjdFR5cGUpID0+IHBvc3QudXNlcilcbiAgICAvLyBwb3N0cz86IFBvc3RPYmplY3RUeXBlW107XG5cblxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gICAgdG9rZW4hOiBzdHJpbmc7XG59XG5cbiIsImltcG9ydCB7IEZpZWxkLCBJRCwgT2JqZWN0VHlwZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IEJhc2VFbnRpdHksIENvbHVtbiwgRW50aXR5LCBKb2luQ29sdW1uLCBKb2luVGFibGUsIE1hbnlUb01hbnksIE1hbnlUb09uZSwgUHJpbWFyeUNvbHVtbiwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL1VzZXIvdXNlclwiO1xuaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi9PYmplY3RQb3N0XCI7XG5cbkBFbnRpdHkoKVxuQE9iamVjdFR5cGUoKVxuZXhwb3J0IGNsYXNzIE9iamVjdENvbW1lbnQgZXh0ZW5kcyBCYXNlRW50aXR5e1xuXG4gICAgQEZpZWxkKCgpID0+IElEKVxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKFwidXVpZFwiKVxuICAgIC8vIEBNYW55VG9PbmUoKCkgPT4gUG9zdE9iamVjdFR5cGUsIGNvbW1lbnRJZCA9PiBjb21tZW50SWQuY29tbWVudHMpXG4gICAgQ29tbWVudElkITogU3RyaW5nO1xuICAgIFxuICAgIEBGaWVsZCgpXG4gICAgQE1hbnlUb09uZSgnVXNlcicsICh1c2VyOiBVc2VyKSA9PiB1c2VyLnVzZXJuYW1lKVxuICAgIHVzZXIhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICAgIEBDb2x1bW4oKVxuICAgIGJvZHkhOiBzdHJpbmc7XG5cbiAgICAvLyBARmllbGQoKVxuICAgIC8vIEBNYW55VG9PbmUoJ1VzZXInLCAodXNlcjogVXNlcikgPT4gdXNlci5pZClcbiAgICAvLyBASm9pblRhYmxlKClcbiAgICAvLyBvd25lcklkITogc3RyaW5nO1xuXG4gICAgLy8gQEZpZWxkKClcbiAgICAvLyBATWFueVRvT25lKCgpPT4gUG9zdE9iamVjdFR5cGUsIHBvc3QgPT4gcG9zdC5pZClcbiAgICAvLyBASm9pblRhYmxlKClcbiAgICAvLyBQb3N0SWQhOiBzdHJpbmc7XG5cbn0gICAiLCJpbXBvcnQgeyBPYmplY3RUeXBlLCBJRCwgRmllbGQgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBCYXNlRW50aXR5LCBDb2x1bW4sIEVudGl0eSwgSm9pbkNvbHVtbiwgSm9pblRhYmxlLCBNYW55VG9PbmUsIE9uZVRvTWFueSwgT25lVG9PbmUsIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL3VzZXJcIjtcbmltcG9ydCB7IE9iamVjdENvbW1lbnQgfSBmcm9tIFwiLi9PYmplY3RDb21tZW50XCI7XG4gIFxuQEVudGl0eSgpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgUG9zdE9iamVjdFR5cGUgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiAgICBARmllbGQoKCkgPT4gSUQpXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oJ3V1aWQnKVxuICAgIGlkITogTnVtYmVyO1xuICBcbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oe3R5cGU6IFwidGV4dFwifSlcbiAgICBkZXNjcmlwdGlvbiE6IHN0cmluZztcbiAgXG4gICAgLy8gQEZpZWxkKCgpID0+IElEKVxuICAgIC8vIEBPbmVUb01hbnkoKCkgPT4gT2JqZWN0Q29tbWVudCwgY29tbWVudHMgPT4gY29tbWVudHMuQ29tbWVudElkKVxuICAgIC8vIGNvbW1lbnRzPzogU3RyaW5nW107XG4gIFxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbigpXG4gICAgbGlrZXM/OiBudW1iZXI7XG4gIFxuICBcbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIGlzQWN0aXZlITogYm9vbGVhbjtcbiAgXG4gICAgLy8gQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gICAgLy8gQE1hbnlUb09uZSgnVXNlcicsICh1c2VyOiBVc2VyKSA9PiB1c2VyLmlkKVxuICAgIC8vIG93bmVySWQ/OiBzdHJpbmc7XG4gICAgXG4gICAgLy8gQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gICAgLy8gQE1hbnlUb09uZSgnVXNlcicsICh1c2VyOiBVc2VyKSA9PiB1c2VyLnBvc3RzKVxuICAgIC8vIHVzZXI/OiBzdHJpbmc7XG59IiwiaW1wb3J0IHsgRmllbGQsIElucHV0VHlwZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcblxuXG5ASW5wdXRUeXBlKClcbmV4cG9ydCBjbGFzcyBJbnB1dENvbW1lbnQge1xuICAgIEBGaWVsZCgpXG4gICAgYm9keSE6IHN0cmluZztcblxuXG5cbn0iLCJpbXBvcnQgeyBGaWVsZCwgSW5wdXRUeXBlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuLy8gaW1wb3J0IHsgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbi8vIEBFbnRpdHkoKVxuQElucHV0VHlwZSgpXG5leHBvcnQgY2xhc3MgQ3JlYXRlUG9zdElucHV0IHtcbiAgICBcbiAgICBARmllbGQoKVxuICAgIGRlc2NyaXB0aW9uITogc3RyaW5nO1xuXG4gICAgXG59IiwiaW1wb3J0IHsgRmllbGQsIElucHV0VHlwZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcblxuXG5cblxuQElucHV0VHlwZSgpXG5leHBvcnQgY2xhc3MgTG9naW5JbnB1dCB7XG4gICAgQEZpZWxkKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgICBlbWFpbD86IHN0cmluZztcblxuICAgIEBGaWVsZCh7IG51bGxhYmxlOiB0cnVlIH0pXG4gICAgdXNlcm5hbWU/OiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIHBhc3N3b3JkITogc3RyaW5nOyBcblxuXG59IiwiaW1wb3J0IHsgSXNFbWFpbCwgTGVuZ3RoIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgRmllbGQsIElucHV0VHlwZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IElzRW1haWxBbHJlYWR5RXhpc3QgfSBmcm9tIFwiLi4vLi4vdmFsaWRhdGUvdmFsaWRhdGVFbWFpbFwiO1xuaW1wb3J0IHsgSXNVc2VybmFtZUFscmVhZHlFeGlzdCB9IGZyb20gXCIuLi8uLi92YWxpZGF0ZS92YWxpZGF0ZVVzZXJuYW1lXCI7XG5cbkBJbnB1dFR5cGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJJbnB1dCB7XG4gICAgQEZpZWxkKClcbiAgICBATGVuZ3RoKDEsIDEwMClcbiAgICBmaXJzdE5hbWUhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBMZW5ndGgoMSwgMTAwKVxuICAgIGxhc3ROYW1lITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBASXNFbWFpbCgpXG4gICAgQElzRW1haWxBbHJlYWR5RXhpc3QoeyBtZXNzYWdlOiBcImVtYWlsIGlzIGFscmVhZHkgaW4gdXNlXCIgfSlcbiAgICBlbWFpbCE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgcGFzc3dvcmQhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0KHsgbWVzc2FnZTogXCJ1c2VybmFtZSBpcyBhbHJlYWR5IGluIHVzZVwifSlcbiAgICB1c2VybmFtZSE6IHN0cmluZztcblxuXG4gICAgXG59IiwiXG5cbmV4cG9ydCBjb25zdCBQcml2YXRlS2V5ICA9ICAgYC0tLS0tQkVHSU4gUlNBIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUJQQUlCQUFKQkFNU1A0YjB4QjZkU0Q0eDlkYXVlRnVYNTYwbDlIUnlXb2VYQVUxVmErRVJjeFlRT3NqZm1cbll4S0IyeGVlbEs5MmViY3AxdWkxMGhBVHZiWmlCVzNjeGs4Q0F3RUFBUUpCQUlGelpLNnRrS1hRTkc5STNPc1dcblpXdzJDSS9RZHhDeDM1T284dmpldld4L0tSbUVIQmZ3a1VoS2o5a2RKZ1UvNW1wYzBXZ1dHNHo1V2RFcm5iOUhcbnVMa0NJUURnblhYS2dDMUZGbjc1ZUt0L2hxM2c1aEtYRFBnbVZUUFBsL1M2Wm5UTXl3SWhBT0FHOVFVdkdSdVBcbk1taHBRblhPb20vanJaWEdCZisrLzErRUV4dkRYeUFOQWlFQWxmSEh2b1ZPc3o1UFNXNzYzY2trcm13b29ObXhcbmxyVnVQdmtzRUh0eElYMENJRnp6aGdZNG5IcEsxK2RxaFNETU02bXBGZ1Rtdk9aNElRMUloNFVsY3ZxaEFpRUFcbnBtNTJFSW5UYjRrekwzU3NKcWdVd1RqZUZTVE03VTFoMjlqQVZMM2lOMjg9XG4tLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLWA7XG5cbmV4cG9ydCBjb25zdCBQdWJsaWNLZXkgPSBgLS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS1cbk1Gd3dEUVlKS29aSWh2Y05BUUVCQlFBRFN3QXdTQUpCQU1TUDRiMHhCNmRTRDR4OWRhdWVGdVg1NjBsOUhSeVdcbm9lWEFVMVZhK0VSY3hZUU9zamZtWXhLQjJ4ZWVsSzkyZWJjcDF1aTEwaEFUdmJaaUJXM2N4azhDQXdFQUFRPT1cbi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLWAiLCJpbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5leHBvcnQgdmFyIFNpZ25PcHRpb24gOmp3dC5TaWduT3B0aW9ucz0ge1xuICAgIGlzc3VlcjogXCJcIixcbiAgICBzdWJqZWN0OlwiXCIsXG4gICAgYXVkaWVuY2U6IFwiXCIsXG4gICAgZXhwaXJlc0luOiBcIjM2NWRcIixcbiAgICBhbGdvcml0aG06IFwiUlMyNTZcIlxufTsiLCJpbXBvcnQgeyByZWdpc3RlckRlY29yYXRvciwgVmFsaWRhdGlvbk9wdGlvbnMsIFZhbGlkYXRvckNvbnN0cmFpbnQsIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2UgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3R5cGVzL1VzZXIvdXNlclwiO1xuLy8gaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZW50aXR5L09iamVjdFBvc3RcIjtcbiBcbiBcbi8vIEBWYWxpZGF0b3JDb25zdHJhaW50KHsgYXN5bmM6IHRydWUgfSlcbi8vIGV4cG9ydCBjbGFzcyBGaW5hbE93bmVySWRcbi8vICAgICBpbXBsZW1lbnRzIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2Uge1xuLy8gICAgIC8vIHZhbGlkYXRlKF9vd25lcklkOiBzdHJpbmcpOiBQcm9taXNlPFBvc3RPYmplY3RUeXBlIHwgbnVsbD4ge1xuLy8gICAgIC8vICAgICByZXR1cm4gXG4vLyAgICAgLy8gfVxuLy8gfVxuXG5AVmFsaWRhdG9yQ29uc3RyYWludCh7IGFzeW5jOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgSXNFbWFpbEFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICBpbXBsZW1lbnRzIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2Uge1xuICAgIHZhbGlkYXRlKGVtYWlsOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IGVtYWlsIH0gfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSXNFbWFpbEFscmVhZHlFeGlzdCh2YWxpZGF0ZU9wdGlvbnM/OiBWYWxpZGF0aW9uT3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3Q6IE9iamVjdCwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmVnaXN0ZXJEZWNvcmF0b3Ioe1xuICAgICAgICAgICAgdGFyZ2V0OiBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHZhbGlkYXRlT3B0aW9ucyxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzOiBbXSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogSXNFbWFpbEFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG59IiwiaW1wb3J0IHsgcmVnaXN0ZXJEZWNvcmF0b3IsIFZhbGlkYXRpb25PcHRpb25zLCBWYWxpZGF0b3JDb25zdHJhaW50LCBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi90eXBlcy9Vc2VyL3VzZXJcIjtcblxuXG5cbkBWYWxpZGF0b3JDb25zdHJhaW50KHsgYXN5bmM6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0Q29uc3RyYWludFxuICAgIGltcGxlbWVudHMgVmFsaWRhdG9yQ29uc3RyYWludEludGVyZmFjZSB7XG4gICAgdmFsaWRhdGUodXNlcm5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gVXNlci5maW5kT25lKHsgd2hlcmU6IHsgdXNlcm5hbWUgfSB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0KHZhbGlkYXRlT3B0aW9ucz86IFZhbGlkYXRpb25PcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdDogT2JqZWN0LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xuICAgICAgICByZWdpc3RlckRlY29yYXRvcih7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgb3B0aW9uczogdmFsaWRhdGVPcHRpb25zLFxuICAgICAgICAgICAgY29uc3RyYWludHM6IFtdLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0Q29uc3RyYWludFxuICAgICAgICB9KTtcbiAgICB9O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy12YWxpZGF0b3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBlb3JtXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==