/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 577:
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
exports.AuthorizationReolver = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
const LoginInput_1 = __webpack_require__(407);
const bcryptjs_1 = __importDefault(__webpack_require__(773));
const user_1 = __webpack_require__(287);
let AuthorizationReolver = class AuthorizationReolver {
    login(theParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            const TheUser = yield typeorm_1.getRepository(user_1.User);
            const TheEmail = theParametr.email;
            const TheUsername = theParametr.username;
            const ThePassword = theParametr.password;
            const EmailFind = yield TheUser.findOne({ where: { email: TheEmail } });
            const UsernameFind = yield TheUser.findOne({
                where: { username: TheUsername },
            });
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
    type_graphql_1.Query(() => user_1.User),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginInput_1.LoginArgs]),
    __metadata("design:returntype", Promise)
], AuthorizationReolver.prototype, "login", null);
AuthorizationReolver = __decorate([
    type_graphql_1.Resolver()
], AuthorizationReolver);
exports.AuthorizationReolver = AuthorizationReolver;


/***/ }),

/***/ 987:
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
    createPostByInput(singleParametr) {
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
    type_graphql_1.UseMiddleware(checkInput_1.isAuth),
    type_graphql_1.Mutation(() => ObjectPost_1.PostObjectType, { name: "createPostByInput", nullable: true }),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InputPost_1.CreatePostInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPostByInput", null);
PostResolver = __decorate([
    type_graphql_1.Resolver()
], PostResolver);
exports.PostResolver = PostResolver;


/***/ }),

/***/ 781:
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
exports.TestResolver = void 0;
const type_graphql_1 = __webpack_require__(885);
let TestResolver = class TestResolver {
    helloWorld() {
        return __awaiter(this, void 0, void 0, function* () {
            return "Hello World!";
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestResolver.prototype, "helloWorld", null);
TestResolver = __decorate([
    type_graphql_1.Resolver()
], TestResolver);
exports.TestResolver = TestResolver;


/***/ }),

/***/ 561:
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
const UserArgs_1 = __webpack_require__(487);
const user_1 = __webpack_require__(287);
const keys_1 = __webpack_require__(841);
const signOption_1 = __webpack_require__(97);
const jwt = __importStar(__webpack_require__(722));
let UserResolver = class UserResolver {
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
    type_graphql_1.Mutation(() => String),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserArgs_1.UserArgs]),
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
const apollo_server_1 = __webpack_require__(232);
const typeorm_1 = __webpack_require__(794);
const ObjectPost_1 = __webpack_require__(685);
const UserResolver_1 = __webpack_require__(561);
const user_1 = __webpack_require__(287);
const AuthorizationReolver_1 = __webpack_require__(577);
const ObjectComment_1 = __webpack_require__(606);
const checkInput_1 = __webpack_require__(940);
const PostResolver_1 = __webpack_require__(987);
const TestReolver_1 = __webpack_require__(781);
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
            entities: [ObjectPost_1.PostObjectType, user_1.User, ObjectComment_1.ObjectComment],
        });
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [TestReolver_1.TestResolver, UserResolver_1.UserResolver, AuthorizationReolver_1.AuthorizationReolver, PostResolver_1.PostResolver],
            globalMiddlewares: [checkInput_1.isAuth],
        });
        const production = "production" === "production";
        const server = new apollo_server_1.ApolloServer({
            schema: schema,
            playground: true,
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
const isAuth = ({ info, context }, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(info);
    console.log(info.fieldName);
    const teok = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5MmEwYmM4LTJiMDUtNDZkNS05MjgwLWIzMGQxNmI4MThjZCIsImZpcnN0TmFtZSI6IkxBTiIsImxhc3ROYW1lIjoiQVQiLCJlbWFpbCI6ImhlbG9taWsxMUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imxsb20xMSIsImlhdCI6MTYwODU1NDU5NywiZXhwIjoxNjQwMDkwNTk3LCJhdWQiOiIiLCJpc3MiOiIiLCJzdWIiOiIifQ.FuhfkuNuVuHM-9eru0uAst6PPWTPWfYRADVqwwpnfz9bC5JLuVffLZqBP7ZyiILk4u_dCPYu6dCQSgpXG0P-lg';
    console.log(jwt.decode(teok));
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
const ObjectPost_1 = __webpack_require__(685);
let ObjectComment = class ObjectComment extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => ObjectPost_1.PostObjectType),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    typeorm_1.ManyToOne(() => ObjectPost_1.PostObjectType, (commentId) => commentId.comments),
    typeorm_1.JoinColumn(),
    __metadata("design:type", ObjectPost_1.PostObjectType)
], ObjectComment.prototype, "CommentId", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.ManyToOne("User", (user) => user.username),
    __metadata("design:type", String)
], ObjectComment.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], ObjectComment.prototype, "body", void 0);
__decorate([
    type_graphql_1.Field(() => ObjectPost_1.PostObjectType),
    typeorm_1.ManyToOne(() => ObjectPost_1.PostObjectType, (post) => post.id),
    __metadata("design:type", ObjectPost_1.PostObjectType)
], ObjectComment.prototype, "PostId", void 0);
ObjectComment = __decorate([
    typeorm_1.Entity("comment"),
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
const ObjectComment_1 = __webpack_require__(606);
let PostObjectType = class PostObjectType extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], PostObjectType.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: "text" }),
    __metadata("design:type", String)
], PostObjectType.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => ObjectComment_1.ObjectComment, (comments) => comments.CommentId),
    __metadata("design:type", Array)
], PostObjectType.prototype, "comments", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Boolean)
], PostObjectType.prototype, "isActive", void 0);
PostObjectType = __decorate([
    typeorm_1.Entity("post"),
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
    type_graphql_1.ArgsType()
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
exports.LoginArgs = void 0;
const type_graphql_1 = __webpack_require__(885);
let LoginArgs = class LoginArgs {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], LoginArgs.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], LoginArgs.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LoginArgs.prototype, "password", void 0);
LoginArgs = __decorate([
    type_graphql_1.ArgsType()
], LoginArgs);
exports.LoginArgs = LoginArgs;


/***/ }),

/***/ 487:
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
exports.UserArgs = void 0;
const class_validator_1 = __webpack_require__(516);
const type_graphql_1 = __webpack_require__(885);
const validateEmail_1 = __webpack_require__(686);
const validateUsername_1 = __webpack_require__(274);
let UserArgs = class UserArgs {
};
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], UserArgs.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], UserArgs.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.IsEmail(),
    validateEmail_1.IsEmailAlreadyExist({ message: "email is already in use" }),
    __metadata("design:type", String)
], UserArgs.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserArgs.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    validateUsername_1.IsUsernameAlreadyExist({ message: "username is already in use" }),
    __metadata("design:type", String)
], UserArgs.prototype, "username", void 0);
UserArgs = __decorate([
    type_graphql_1.ArgsType()
], UserArgs);
exports.UserArgs = UserArgs;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9SZW9sdmVycy9BdXRob3JpemF0aW9uUmVvbHZlci50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9SZW9sdmVycy9Qb3N0UmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvUmVvbHZlcnMvVGVzdFJlb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvUmVvbHZlcnMvVXNlclJlc29sdmVyLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL21pZGRsZXdhcmUvY2hlY2tJbnB1dC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9Vc2VyL3VzZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvZW50aXR5L09iamVjdENvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvZW50aXR5L09iamVjdFBvc3QudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvaW5wdXRUeXBlL0lucHV0UG9zdC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9pbnB1dFR5cGUvTG9naW5JbnB1dC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9pbnB1dFR5cGUvVXNlckFyZ3MudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdXRpbGl0ZXMvdG9rZW4va2V5cy50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy91dGlsaXRlcy90b2tlbi9zaWduT3B0aW9uLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3ZhbGlkYXRlL3ZhbGlkYXRlRW1haWwudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdmFsaWRhdGUvdmFsaWRhdGVVc2VybmFtZS50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImJjcnlwdGpzXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJjbGFzcy12YWxpZGF0b3JcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwicmVmbGVjdC1tZXRhZGF0YVwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwidHlwZS1ncmFwaHFsXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJ0eXBlb3JtXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29weXNoaXQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBK0Q7QUFDL0QsMkNBQXdDO0FBQ3hDLDhDQUEwRDtBQUMxRCw2REFBOEI7QUFDOUIsd0NBQTBDO0FBRzFDLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBRXpCLEtBQUssQ0FBUyxXQUFzQjs7WUFDeEMsTUFBTSxPQUFPLEdBQUcsTUFBTSx1QkFBYSxDQUFDLFdBQUksQ0FBQyxDQUFDO1lBRTFDLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkMsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUN6QyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBRXpDLE1BQU0sU0FBUyxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEUsTUFBTSxZQUFZLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUN6QyxLQUFLLEVBQUUsRUFBRSxRQUFR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QztBQUNOLENBQUM7QUFWRCx3REFVQzs7Ozs7Ozs7QUMxQkQsMkM7Ozs7Ozs7QUNBQSxzQzs7Ozs7OztBQ0FBLDZDOzs7Ozs7O0FDQUEsMEM7Ozs7Ozs7QUNBQSw4Qzs7Ozs7OztBQ0FBLDBDOzs7Ozs7O0FDQUEscUM7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJncywgTXV0YXRpb24sIFF1ZXJ5LCBSZXNvbHZlciB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IGdldFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgTG9naW5BcmdzIH0gZnJvbSBcIi4uL3R5cGVzL2lucHV0VHlwZS9Mb2dpbklucHV0XCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi90eXBlcy9Vc2VyL3VzZXJcIjtcblxuQFJlc29sdmVyKClcbmV4cG9ydCBjbGFzcyBBdXRob3JpemF0aW9uUmVvbHZlciB7XG4gIEBRdWVyeSgoKSA9PiBVc2VyKVxuICBhc3luYyBsb2dpbihAQXJncygpIHRoZVBhcmFtZXRyOiBMb2dpbkFyZ3MpOiBQcm9taXNlPFVzZXIgfCBudWxsIHwgdm9pZD4ge1xuICAgIGNvbnN0IFRoZVVzZXIgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFVzZXIpO1xuXG4gICAgY29uc3QgVGhlRW1haWwgPSB0aGVQYXJhbWV0ci5lbWFpbDtcbiAgICBjb25zdCBUaGVVc2VybmFtZSA9IHRoZVBhcmFtZXRyLnVzZXJuYW1lO1xuICAgIGNvbnN0IFRoZVBhc3N3b3JkID0gdGhlUGFyYW1ldHIucGFzc3dvcmQ7XG5cbiAgICBjb25zdCBFbWFpbEZpbmQgPSBhd2FpdCBUaGVVc2VyLmZpbmRPbmUoeyB3aGVyZTogeyBlbWFpbDogVGhlRW1haWwgfSB9KTtcbiAgICBjb25zdCBVc2VybmFtZUZpbmQgPSBhd2FpdCBUaGVVc2VyLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHsgdXNlcm5hbWU6IFRoZVVzZXJuYW1lIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIUVtYWlsRmluZCAmJiAhVXNlcm5hbWVGaW5kKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoRW1haWxGaW5kKSB7XG4gICAgICBjb25zdCBQYXNzd29yZE1hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoXG4gICAgICAgIFRoZVBhc3N3b3JkLFxuICAgICAgICBFbWFpbEZpbmQhLnBhc3N3b3JkXG4gICAgICApO1xuICAgICAgaWYgKCFQYXNzd29yZE1hdGNoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEVtYWlsRmluZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoVXNlcm5hbWVGaW5kKSB7XG4gICAgICBjb25zdCBQYXNzd29yZE1hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoXG4gICAgICAgIFRoZVBhc3N3b3JkLFxuICAgICAgICBVc2VybmFtZUZpbmQhLnBhc3N3b3JkXG4gICAgICApO1xuICAgICAgaWYgKCFQYXNzd29yZE1hdGNoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVzZXJuYW1lRmluZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFyZyxcbiAgQXJncyxcbiAgQ3R4LFxuICAvLyBBcmdzLFxuICBNdXRhdGlvbixcbiAgUXVlcnksXG4gIFJlc29sdmVyLFxuICBVc2VNaWRkbGV3YXJlLFxuICAvLyBVc2VNaWRkbGV3YXJlLFxufSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBQb3N0T2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlcy9lbnRpdHkvT2JqZWN0UG9zdFwiO1xuaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IENyZWF0ZVBvc3RJbnB1dCB9IGZyb20gXCIuLi90eXBlcy9pbnB1dFR5cGUvSW5wdXRQb3N0XCI7XG5pbXBvcnQgeyBnZXRSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcblxuLy8gaW1wb3J0IHsgTG9nQWNjZXNzIH0gZnJvbSBcIi4uL21pZGRsZXdhcmUvY2hlY2tJbnB1dFwiO1xuXG5pbXBvcnQgeyBpc0F1dGggfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9jaGVja0lucHV0XCI7XG5pbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXMvY29udGV4dC9NeUNvbnRleHRcIjtcblxuQFJlc29sdmVyKClcbmV4cG9ydCBjbGFzcyBQb3N0UmVzb2x2ZXIge1xuICBAVXNlTWlkZGxld2FyZShpc0F1dGgpXG4gIEBNdXRhdGlvbigoKSA9PiBQb3N0T2JqZWN0VHlwZSwgeyBuYW1lOiBcImNyZWF0ZVBvc3RCeUlucHV0XCIsIG51bGxhYmxlOiB0cnVlIH0pXG4gIGFzeW5jIGNyZWF0ZVBvc3RCeUlucHV0KFxuICAgIEBBcmdzKCkgc2luZ2xlUGFyYW1ldHI6IENyZWF0ZVBvc3RJbnB1dFxuICApOiBQcm9taXNlPFBvc3RPYmplY3RUeXBlIHwgbnVsbD4ge1xuICAgIGNvbnN0IHJldHVyblBvc3QgPSBuZXcgUG9zdE9iamVjdFR5cGUoKTtcbiAgICByZXR1cm5Qb3N0LmRlc2NyaXB0aW9uID0gc2luZ2xlUGFyYW1ldHIuZGVzY3JpcHRpb247XG4gICAgY29uc3QgcG9zdFJlcCA9IGF3YWl0IGdldFJlcG9zaXRvcnkoUG9zdE9iamVjdFR5cGUpO1xuXG4gICAgYXdhaXQgcG9zdFJlcC5zYXZlKHJldHVyblBvc3QpO1xuICAgIHJldHVybiByZXR1cm5Qb3N0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBRdWVyeSwgUmVzb2x2ZXIgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgVGVzdFJlc29sdmVyIHtcbiAgQFF1ZXJ5KCgpID0+IFN0cmluZylcbiAgYXN5bmMgaGVsbG9Xb3JsZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBcIkhlbGxvIFdvcmxkIVwiO1xuICB9XG59XG4iLCJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgQXJncywgTXV0YXRpb24sIFJlc29sdmVyLCBVc2VNaWRkbGV3YXJlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XG4vLyBpbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9NeUNvbnRleHRcIjtcbmltcG9ydCB7IFVzZXJBcmdzIH0gZnJvbSBcIi4uL3R5cGVzL2lucHV0VHlwZS9Vc2VyQXJnc1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi90eXBlcy9Vc2VyL3VzZXJcIjtcbmltcG9ydCB7IFByaXZhdGVLZXksIFB1YmxpY0tleSB9IGZyb20gXCIuLi91dGlsaXRlcy90b2tlbi9rZXlzXCI7XG5pbXBvcnQgeyBTaWduT3B0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGVzL3Rva2VuL3NpZ25PcHRpb25cIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBpc0F1dGggfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9jaGVja0lucHV0XCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmVyIHtcbiAgQE11dGF0aW9uKCgpID0+IFN0cmluZylcbiAgYXN5bmMgcmVnaXN0ZXIoQEFyZ3MoKSBzaW5nbGVQYXJhbWV0cjogVXNlckFyZ3MpOiBQcm9taXNlPFN0cmluZyB8IHZvaWQ+IHtcbiAgICBjb25zdCByZXR1cm5Vc2VyID0gbmV3IFVzZXIoKTtcbiAgICByZXR1cm5Vc2VyLmZpcnN0TmFtZSA9IHNpbmdsZVBhcmFtZXRyLmZpcnN0TmFtZTtcbiAgICByZXR1cm5Vc2VyLmxhc3ROYW1lID0gc2luZ2xlUGFyYW1ldHIubGFzdE5hbWU7XG4gICAgcmV0dXJuVXNlci5lbWFpbCA9IHNpbmdsZVBhcmFtZXRyLmVtYWlsO1xuXG4gICAgcmV0dXJuVXNlci5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHNpbmdsZVBhcmFtZXRyLnBhc3N3b3JkLCAxMik7XG4gICAgcmV0dXJuVXNlci51c2VybmFtZSA9IHNpbmdsZVBhcmFtZXRyLnVzZXJuYW1lO1xuICAgIGF3YWl0IHJldHVyblVzZXIuc2F2ZSgpO1xuICAgIGNvbnN0IHRva2VuVXNlciA9IGp3dC5zaWduKFxuICAgICAge1xuICAgICAgICBpZDogcmV0dXJuVXNlci5pZCxcbiAgICAgICAgZmlyc3ROYW1lOiByZXR1cm5Vc2VyLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IHJldHVyblVzZXIubGFzdE5hbWUsXG4gICAgICAgIGVtYWlsOiByZXR1cm5Vc2VyLmVtYWlsLFxuICAgICAgICB1c2VybmFtZTogcmV0dXJuVXNlci51c2VybmFtZSxcbiAgICAgIH0sXG4gICAgICBQcml2YXRlS2V5LFxuICAgICAgU2lnbk9wdGlvblxuICAgICk7XG4gICAgcmV0dXJuVXNlci50b2tlbiA9IHRva2VuVXNlcjtcbiAgICBhd2FpdCByZXR1cm5Vc2VyLnNhdmUoKTtcbiAgICByZXR1cm4gdG9rZW5Vc2VyO1xuICB9XG59XG4iLCJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgeyBidWlsZFNjaGVtYSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcblxuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlcy9lbnRpdHkvT2JqZWN0UG9zdFwiO1xuaW1wb3J0IHsgVXNlclJlc29sdmVyIH0gZnJvbSBcIi4vUmVvbHZlcnMvVXNlclJlc29sdmVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdHlwZXMvVXNlci91c2VyXCI7XG5cbmltcG9ydCB7IEF1dGhvcml6YXRpb25SZW9sdmVyIH0gZnJvbSBcIi4vUmVvbHZlcnMvQXV0aG9yaXphdGlvblJlb2x2ZXJcIjtcblxuaW1wb3J0IHsgT2JqZWN0Q29tbWVudCB9IGZyb20gXCIuL3R5cGVzL2VudGl0eS9PYmplY3RDb21tZW50XCI7XG5pbXBvcnQgeyBpc0F1dGggfSBmcm9tIFwiLi9taWRkbGV3YXJlL2NoZWNrSW5wdXRcIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBQb3N0UmVzb2x2ZXIgfSBmcm9tIFwiLi9SZW9sdmVycy9Qb3N0UmVzb2x2ZXJcIjtcbmltcG9ydCB7IFRlc3RSZXNvbHZlciB9IGZyb20gXCIuL1Jlb2x2ZXJzL1Rlc3RSZW9sdmVyXCI7XG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwNDA7XG5cbmFzeW5jIGZ1bmN0aW9uIEJvb3RzdHJhcCgpIHtcbiAgY29uc3QgY29ubmVjdGlvblBvc3QgPSBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKHtcbiAgICBuYW1lOiBcImRlZmF1bHRcIixcbiAgICB0eXBlOiBcInBvc3RncmVzXCIsXG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICBwb3J0OiA1NDMyLFxuICAgIHVzZXJuYW1lOiBcImhlbGxvbWlrXCIsXG4gICAgcGFzc3dvcmQ6IFwiMjEwNlwiLFxuICAgIGRhdGFiYXNlOiBcInBvc3RzXCIsXG4gICAgc3luY2hyb25pemU6IHRydWUsXG4gICAgbG9nZ2luZzogdHJ1ZSxcbiAgICBlbnRpdGllczogW1Bvc3RPYmplY3RUeXBlLCBVc2VyLCBPYmplY3RDb21tZW50XSxcbiAgfSk7XG5cbiAgY29uc3Qgc2NoZW1hID0gYXdhaXQgYnVpbGRTY2hlbWEoe1xuICAgIHJlc29sdmVyczogW1Rlc3RSZXNvbHZlciwgVXNlclJlc29sdmVyLCBBdXRob3JpemF0aW9uUmVvbHZlciwgUG9zdFJlc29sdmVyXSxcbiAgICBnbG9iYWxNaWRkbGV3YXJlczogW2lzQXV0aF0sXG4gIH0pO1xuXG4gIGNvbnN0IHByb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XG5cbiAgY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgcGxheWdyb3VuZDogdHJ1ZSxcbiAgICAvLyBjb250ZXh0OiAoeyByZXEgfSkgPT4ge1xuICAgIC8vICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uIHx8IFwiXCI7XG5cbiAgICAvLyAgIGNvbnN0IHVzZXIgPSBqd3QuZGVjb2RlKHRva2VuKTtcblxuICAgIC8vICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJ5b3UgbXVzdCBiZSBsb2dnZWQgaW5cIik7XG5cbiAgICAvLyAgIHJldHVybiB7IHVzZXIgfTtcbiAgICAvLyB9LFxuICB9KTtcblxuICBzZXJ2ZXIubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNlcnZlciBzdGFydGVkLCBiaXRjaFwiKTtcbiAgfSk7XG5cbiAgLy8gY29uc3Qgc2VydmVySW5mbyA9IGF3YWl0IHNlcnZlci5saXN0ZW4oUE9SVCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiU0VSVkVFUiBTVEFSVEVEXCIpO1xufVxuXG5Cb290c3RyYXAoKTtcbiIsImltcG9ydCB7IE1pZGRsZXdhcmVGbiB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3R5cGVzL1VzZXIvdXNlclwiO1xuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXMvY29udGV4dC9NeUNvbnRleHRcIjtcbmltcG9ydCB7IFByaXZhdGVLZXksIFB1YmxpY0tleSB9IGZyb20gXCIuLi91dGlsaXRlcy90b2tlbi9rZXlzXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBMb2dBY2Nlc3M6IE1pZGRsZXdhcmVGbiA9ICh7IGNvbnRleHQsIGluZm8gfSwgbmV4dCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhpbmZvKTtcbi8vICAgY29uc3QgdG9rZW4gPSAoY29udGV4dCBhcyBhbnkpLnJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XG4vLyAgIGNvbnNvbGUubG9nKGp3dC5kZWNvZGUoKGNvbnRleHQgYXMgYW55KS5yZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKSk7XG4vLyAgIGNvbnNvbGUubG9nKChjb250ZXh0IGFzIGFueSkucmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbik7XG4vLyAgIHJldHVybiBuZXh0KCk7XG4vLyB9O1xuXG5leHBvcnQgY29uc3QgaXNBdXRoOiBNaWRkbGV3YXJlRm48TXlDb250ZXh0PiA9IGFzeW5jIChcbiAgeyBpbmZvLCBjb250ZXh0IH0sXG4gIG5leHRcbikgPT4ge1xuICBjb25zb2xlLmxvZyhpbmZvKTtcbiAgY29uc29sZS5sb2coaW5mby5maWVsZE5hbWUpO1xuICBcbiAgLy8gaWYgKGluZm8uZmllbGROYW1lID09IFwiTG9naW5cIiB8fCBpbmZvLmZpZWxkTmFtZSA9PSBcInJlZ2lzdGVyXCIpIHtcbiAgLy8gICByZXR1cm4gbmV4dCgpO1xuICAvLyB9XG4gIFxuICAvLyBjb25zb2xlLmxvZygoY29udGV4dCBhcyBhbnkpLnJlcS5oZWFkZXIuYXV0aG9yaXphdGlvbik7XG4gIC8vIGNvbnNvbGUubG9nKGp3dC5kZWNvZGUoKGNvbnRleHQgYXMgYW55KS5yZXEuaGVhZGVyLmF1dGhvcml6YXRpb24pKTtcbiAgLy8gaWYgKCFqd3QudmVyaWZ5KChjb250ZXh0IGFzIGFueSkucmVxLmhlYWRlci5hdXRob3JpemF0aW9uLCBQdWJsaWNLZXkpKSB7XG4gIC8vICAgdGhyb3cgbmV3IEVycm9yKCdubyBhdXRob3JpemF0aW9uJyk7XG4gIC8vIH1cbiAgY29uc3QgdGVvayA9ICdleUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJalE1TW1Fd1ltTTRMVEppTURVdE5EWmtOUzA1TWpnd0xXSXpNR1F4Tm1JNE1UaGpaQ0lzSW1acGNuTjBUbUZ0WlNJNklreEJUaUlzSW14aGMzUk9ZVzFsSWpvaVFWUWlMQ0psYldGcGJDSTZJbWhsYkc5dGFXc3hNVUJuYldGcGJDNWpiMjBpTENKMWMyVnlibUZ0WlNJNklteHNiMjB4TVNJc0ltbGhkQ0k2TVRZd09EVTFORFU1Tnl3aVpYaHdJam94TmpRd01Ea3dOVGszTENKaGRXUWlPaUlpTENKcGMzTWlPaUlpTENKemRXSWlPaUlpZlEuRnVoZmt1TnVWdUhNLTllcnUwdUFzdDZQUFdUUFdmWVJBRFZxd3dwbmZ6OWJDNUpMdVZmZkxacUJQN1p5aUlMazR1X2RDUFl1NmRDUVNncFhHMFAtbGcnO1xuICBjb25zb2xlLmxvZyhqd3QuZGVjb2RlKHRlb2spKTtcbiAgcmV0dXJuIG5leHQoKTtcbn07XG4iLCJpbXBvcnQgeyBSZXBsYWNlRmllbGRXaXRoRnJhZ21lbnQgfSBmcm9tIFwiYXBvbGxvLXNlcnZlclwiO1xuaW1wb3J0IHsgRmllbGQsIElELCBPYmplY3RUeXBlLCBSb290IH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHtcbiAgQmFzZUVudGl0eSxcbiAgQ29sdW1uLFxuICBFbnRpdHksXG4gIE9uZVRvTWFueSxcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcbn0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4uL2VudGl0eS9PYmplY3RQb3N0XCI7XG5cbkBFbnRpdHkoKVxuQE9iamVjdFR5cGUoKVxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiAgQEZpZWxkKCgpID0+IElEKVxuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbihcInV1aWRcIilcbiAgaWQhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQENvbHVtbigpXG4gIGZpcnN0TmFtZSE6IHN0cmluZztcblxuICBARmllbGQoKVxuICBAQ29sdW1uKClcbiAgbGFzdE5hbWUhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQENvbHVtbihcInRleHRcIiwgeyB1bmlxdWU6IHRydWUgfSlcbiAgZW1haWwhOiBzdHJpbmc7XG5cbiAgLy8gQEZpZWxkKClcbiAgQENvbHVtbigpXG4gIHBhc3N3b3JkITogc3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gIEBDb2x1bW4oKVxuICB1c2VybmFtZSE6IHN0cmluZztcblxuICBARmllbGQoKVxuICBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgdG9rZW4hOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBGaWVsZCwgSUQsIE9iamVjdFR5cGUgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQge1xuICBCYXNlRW50aXR5LFxuICBDb2x1bW4sXG4gIEVudGl0eSxcbiAgSm9pbkNvbHVtbixcbiAgSm9pblRhYmxlLFxuICBNYW55VG9NYW55LFxuICBNYW55VG9PbmUsXG4gIFByaW1hcnlDb2x1bW4sXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG59IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL1VzZXIvdXNlclwiO1xuaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi9PYmplY3RQb3N0XCI7XG5cbkBFbnRpdHkoXCJjb21tZW50XCIpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgT2JqZWN0Q29tbWVudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuICBARmllbGQoKCkgPT4gUG9zdE9iamVjdFR5cGUpXG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKFwidXVpZFwiKVxuICBATWFueVRvT25lKFxuICAgICgpID0+IFBvc3RPYmplY3RUeXBlLFxuICAgIChjb21tZW50SWQ6IFBvc3RPYmplY3RUeXBlKSA9PiBjb21tZW50SWQuY29tbWVudHNcbiAgKVxuICBASm9pbkNvbHVtbigpXG4gIENvbW1lbnRJZCE6IFBvc3RPYmplY3RUeXBlO1xuXG4gIEBGaWVsZCgpXG4gIEBNYW55VG9PbmUoXCJVc2VyXCIsICh1c2VyOiBVc2VyKSA9PiB1c2VyLnVzZXJuYW1lKVxuICB1c2VyITogc3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gIEBDb2x1bW4oKVxuICBib2R5ITogc3RyaW5nO1xuXG4gIC8vIEBGaWVsZCgpXG4gIC8vIEBNYW55VG9PbmUoJ1VzZXInLCAodXNlcjogVXNlcikgPT4gdXNlci5pZClcbiAgLy8gQEpvaW5UYWJsZSgpXG4gIC8vIG93bmVySWQhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IFBvc3RPYmplY3RUeXBlKVxuICBATWFueVRvT25lKCgpID0+IFBvc3RPYmplY3RUeXBlLCAocG9zdDogUG9zdE9iamVjdFR5cGUpID0+IHBvc3QuaWQpXG4gIFBvc3RJZCE6IFBvc3RPYmplY3RUeXBlO1xufVxuIiwiaW1wb3J0IHsgT2JqZWN0VHlwZSwgSUQsIEZpZWxkIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHtcbiAgQmFzZUVudGl0eSxcbiAgQ29sdW1uLFxuICBFbnRpdHksXG4gIEpvaW5Db2x1bW4sXG4gIEpvaW5UYWJsZSxcbiAgTWFueVRvT25lLFxuICBPbmVUb01hbnksXG4gIE9uZVRvT25lLFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxufSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL3VzZXJcIjtcbmltcG9ydCB7IE9iamVjdENvbW1lbnQgfSBmcm9tIFwiLi9PYmplY3RDb21tZW50XCI7XG5cbkBFbnRpdHkoXCJwb3N0XCIpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgUG9zdE9iamVjdFR5cGUgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiAgQEZpZWxkKCgpID0+IElEKVxuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbihcInV1aWRcIilcbiAgaWQhOiBTdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQENvbHVtbih7IHR5cGU6IFwidGV4dFwiIH0pXG4gIGRlc2NyaXB0aW9uITogc3RyaW5nO1xuXG4gIEBPbmVUb01hbnkoXG4gICAgKCkgPT4gT2JqZWN0Q29tbWVudCxcbiAgICAoY29tbWVudHM6IE9iamVjdENvbW1lbnQpID0+IGNvbW1lbnRzLkNvbW1lbnRJZFxuICApXG4gIGNvbW1lbnRzITogT2JqZWN0Q29tbWVudFtdO1xuXG4gIC8vIEBGaWVsZCgpXG4gIC8vIEBDb2x1bW4oKVxuICAvLyBsaWtlcz86IG51bWJlcjtcblxuICBARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgaXNBY3RpdmU/OiBib29sZWFuO1xuXG5cbiAgLy8gQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gIC8vIEBNYW55VG9PbmUoKCkgPT4gVXNlciwgKHVzZXI6IFVzZXIpID0+IHVzZXIucG9zdHMpXG4gIC8vIHVzZXI/OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBBcmdzVHlwZSwgRmllbGQsIElucHV0VHlwZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbi8vIGltcG9ydCB7IFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuXG4vLyBARW50aXR5KClcbkBBcmdzVHlwZSgpXG5leHBvcnQgY2xhc3MgQ3JlYXRlUG9zdElucHV0IHtcbiAgQEZpZWxkKClcbiAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBBcmdzVHlwZSwgRmllbGQgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5cbkBBcmdzVHlwZSgpXG5leHBvcnQgY2xhc3MgTG9naW5BcmdzIHtcbiAgQEZpZWxkKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgZW1haWw/OiBzdHJpbmc7XG5cbiAgQEZpZWxkKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgcGFzc3dvcmQhOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBJc0VtYWlsLCBMZW5ndGggfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBBcmdzVHlwZSwgRmllbGQgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBJc0VtYWlsQWxyZWFkeUV4aXN0IH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRlL3ZhbGlkYXRlRW1haWxcIjtcbmltcG9ydCB7IElzVXNlcm5hbWVBbHJlYWR5RXhpc3QgfSBmcm9tIFwiLi4vLi4vdmFsaWRhdGUvdmFsaWRhdGVVc2VybmFtZVwiO1xuXG5AQXJnc1R5cGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJBcmdzIHtcbiAgQEZpZWxkKClcbiAgQExlbmd0aCgxLCAxMDApXG4gIGZpcnN0TmFtZSE6IHN0cmluZztcblxuICBARmllbGQoKVxuICBATGVuZ3RoKDEsIDEwMClcbiAgbGFzdE5hbWUhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQElzRW1haWwoKVxuICBASXNFbWFpbEFscmVhZHlFeGlzdCh7IG1lc3NhZ2U6IFwiZW1haWwgaXMgYWxyZWFkeSBpbiB1c2VcIiB9KVxuICBlbWFpbCE6IHN0cmluZztcblxuICBARmllbGQoKVxuICBwYXNzd29yZCE6IHN0cmluZztcblxuICBARmllbGQoKVxuICBASXNVc2VybmFtZUFscmVhZHlFeGlzdCh7IG1lc3NhZ2U6IFwidXNlcm5hbWUgaXMgYWxyZWFkeSBpbiB1c2VcIiB9KVxuICB1c2VybmFtZSE6IHN0cmluZztcbn1cbiIsIlxuXG5leHBvcnQgY29uc3QgUHJpdmF0ZUtleSAgPSAgIGAtLS0tLUJFR0lOIFJTQSBQUklWQVRFIEtFWS0tLS0tXG5NSUlCUEFJQkFBSkJBTVNQNGIweEI2ZFNENHg5ZGF1ZUZ1WDU2MGw5SFJ5V29lWEFVMVZhK0VSY3hZUU9zamZtXG5ZeEtCMnhlZWxLOTJlYmNwMXVpMTBoQVR2YlppQlczY3hrOENBd0VBQVFKQkFJRnpaSzZ0a0tYUU5HOUkzT3NXXG5aV3cyQ0kvUWR4Q3gzNU9vOHZqZXZXeC9LUm1FSEJmd2tVaEtqOWtkSmdVLzVtcGMwV2dXRzR6NVdkRXJuYjlIXG51TGtDSVFEZ25YWEtnQzFGRm43NWVLdC9ocTNnNWhLWERQZ21WVFBQbC9TNlpuVE15d0loQU9BRzlRVXZHUnVQXG5NbWhwUW5YT29tL2pyWlhHQmYrKy8xK0VFeHZEWHlBTkFpRUFsZkhIdm9WT3N6NVBTVzc2M2Nra3Jtd29vTm14XG5sclZ1UHZrc0VIdHhJWDBDSUZ6emhnWTRuSHBLMStkcWhTRE1NNm1wRmdUbXZPWjRJUTFJaDRVbGN2cWhBaUVBXG5wbTUyRUluVGI0a3pMM1NzSnFnVXdUamVGU1RNN1UxaDI5akFWTDNpTjI4PVxuLS0tLS1FTkQgUlNBIFBSSVZBVEUgS0VZLS0tLS1gO1xuXG5leHBvcnQgY29uc3QgUHVibGljS2V5ID0gYC0tLS0tQkVHSU4gUFVCTElDIEtFWS0tLS0tXG5NRnd3RFFZSktvWklodmNOQVFFQkJRQURTd0F3U0FKQkFNU1A0YjB4QjZkU0Q0eDlkYXVlRnVYNTYwbDlIUnlXXG5vZVhBVTFWYStFUmN4WVFPc2pmbVl4S0IyeGVlbEs5MmViY3AxdWkxMGhBVHZiWmlCVzNjeGs4Q0F3RUFBUT09XG4tLS0tLUVORCBQVUJMSUMgS0VZLS0tLS1gIiwiaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuZXhwb3J0IHZhciBTaWduT3B0aW9uIDpqd3QuU2lnbk9wdGlvbnM9IHtcbiAgICBpc3N1ZXI6IFwiXCIsXG4gICAgc3ViamVjdDpcIlwiLFxuICAgIGF1ZGllbmNlOiBcIlwiLFxuICAgIGV4cGlyZXNJbjogXCIzNjVkXCIsXG4gICAgYWxnb3JpdGhtOiBcIlJTMjU2XCJcbn07IiwiaW1wb3J0IHsgcmVnaXN0ZXJEZWNvcmF0b3IsIFZhbGlkYXRpb25PcHRpb25zLCBWYWxpZGF0b3JDb25zdHJhaW50LCBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi90eXBlcy9Vc2VyL3VzZXJcIjtcbi8vIGltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4uL2VudGl0eS9PYmplY3RQb3N0XCI7XG4gXG4gXG4vLyBAVmFsaWRhdG9yQ29uc3RyYWludCh7IGFzeW5jOiB0cnVlIH0pXG4vLyBleHBvcnQgY2xhc3MgRmluYWxPd25lcklkXG4vLyAgICAgaW1wbGVtZW50cyBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIHtcbi8vICAgICAvLyB2YWxpZGF0ZShfb3duZXJJZDogc3RyaW5nKTogUHJvbWlzZTxQb3N0T2JqZWN0VHlwZSB8IG51bGw+IHtcbi8vICAgICAvLyAgICAgcmV0dXJuIFxuLy8gICAgIC8vIH1cbi8vIH1cblxuQFZhbGlkYXRvckNvbnN0cmFpbnQoeyBhc3luYzogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIElzRW1haWxBbHJlYWR5RXhpc3RDb25zdHJhaW50XG4gICAgaW1wbGVtZW50cyBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIHtcbiAgICB2YWxpZGF0ZShlbWFpbDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBVc2VyLmZpbmRPbmUoeyB3aGVyZTogeyBlbWFpbCB9IH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIElzRW1haWxBbHJlYWR5RXhpc3QodmFsaWRhdGVPcHRpb25zPzogVmFsaWRhdGlvbk9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0OiBPYmplY3QsIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJlZ2lzdGVyRGVjb3JhdG9yKHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBvcHRpb25zOiB2YWxpZGF0ZU9wdGlvbnMsXG4gICAgICAgICAgICBjb25zdHJhaW50czogW10sXG4gICAgICAgICAgICB2YWxpZGF0b3I6IElzRW1haWxBbHJlYWR5RXhpc3RDb25zdHJhaW50XG4gICAgICAgIH0pO1xuICAgIH07XG5cblxufSIsImltcG9ydCB7IHJlZ2lzdGVyRGVjb3JhdG9yLCBWYWxpZGF0aW9uT3B0aW9ucywgVmFsaWRhdG9yQ29uc3RyYWludCwgVmFsaWRhdG9yQ29uc3RyYWludEludGVyZmFjZSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG5cblxuXG5AVmFsaWRhdG9yQ29uc3RyYWludCh7IGFzeW5jOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgSXNVc2VybmFtZUFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICBpbXBsZW1lbnRzIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2Uge1xuICAgIHZhbGlkYXRlKHVzZXJuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJuYW1lIH0gfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSXNVc2VybmFtZUFscmVhZHlFeGlzdCh2YWxpZGF0ZU9wdGlvbnM/OiBWYWxpZGF0aW9uT3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3Q6IE9iamVjdCwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmVnaXN0ZXJEZWNvcmF0b3Ioe1xuICAgICAgICAgICAgdGFyZ2V0OiBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHZhbGlkYXRlT3B0aW9ucyxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzOiBbXSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogSXNVc2VybmFtZUFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICAgICAgfSk7XG4gICAgfTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3MtdmFsaWRhdG9yXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR5cGUtZ3JhcGhxbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oNjA3KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=