/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 277:
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
exports.checkUser = void 0;
const jwt = __importStar(__webpack_require__(722));
const checkUser = ({ context, info }, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(context.req.headers.authorization);
    const token = context.req.headers.authorization;
    const user = jwt.decode(token);
    if (!user)
        throw new Error("you have to be logged in");
    return next();
});
exports.checkUser = checkUser;


/***/ }),

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

/***/ 521:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FollowerResolver = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
const user_1 = __webpack_require__(287);
const jwt = __importStar(__webpack_require__(722));
const middleware_1 = __webpack_require__(277);
const keys_1 = __webpack_require__(841);
let FollowerResolver = class FollowerResolver {
    follow(his_id, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRep = yield typeorm_1.getRepository(user_1.User);
            const toObj = yield userRep.findOne({ where: { id: his_id } });
            if (!toObj)
                return;
            const getToken = ctx.req.headers.authorization;
            const tokenVer = jwt.verify(getToken, keys_1.PublicKey);
            const tokenDec = jwt.decode(getToken);
            console.log(tokenVer);
            return null;
        });
    }
};
__decorate([
    type_graphql_1.UseMiddleware(middleware_1.checkUser),
    type_graphql_1.Mutation(() => user_1.User, { nullable: true }),
    __param(0, type_graphql_1.Arg("to")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FollowerResolver.prototype, "follow", null);
FollowerResolver = __decorate([
    type_graphql_1.Resolver()
], FollowerResolver);
exports.FollowerResolver = FollowerResolver;


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
const user_1 = __webpack_require__(287);
const middleware_1 = __webpack_require__(277);
let PostResolver = class PostResolver {
    createPostByInput(singleParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            const UserRep = yield typeorm_1.getRepository(user_1.User);
            const UserObj = yield UserRep.findOne({ id: singleParametr.ownerId });
            const PostObj = new ObjectPost_1.ObjectPost(singleParametr.description, UserObj === null || UserObj === void 0 ? void 0 : UserObj.id);
            PostObj.username = UserObj.username;
            PostObj.save();
            return PostObj;
        });
    }
    getPosts(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const PostRep = yield typeorm_1.getRepository(ObjectPost_1.ObjectPost);
            const PostObj = yield PostRep.findAndCount({
                where: {
                    user: userId
                },
                take: 5
            });
            return PostObj[0];
        });
    }
};
__decorate([
    type_graphql_1.UseMiddleware(middleware_1.checkUser),
    type_graphql_1.Mutation(() => ObjectPost_1.ObjectPost, { name: "createPostByInput", nullable: true }),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InputPost_1.CreatePostInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPostByInput", null);
__decorate([
    type_graphql_1.Query(() => [ObjectPost_1.ObjectPost], { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "getPosts", null);
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
const middleware_1 = __webpack_require__(277);
let TestResolver = class TestResolver {
    helloWorld() {
        return __awaiter(this, void 0, void 0, function* () {
            return "Hello World!";
        });
    }
};
__decorate([
    type_graphql_1.UseMiddleware(middleware_1.checkUser),
    type_graphql_1.Query(() => String, { nullable: true }),
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
const PostResolver_1 = __webpack_require__(987);
const TestReolver_1 = __webpack_require__(781);
const ObjectFollowers_1 = __webpack_require__(144);
const FollowerResolver_1 = __webpack_require__(521);
const PORT = process.env.PORT || 4040;
function Bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const connectionPost = yield typeorm_1.createConnection({
            name: "default",
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "irlenturlykhanov",
            password: "2106",
            database: "posts",
            synchronize: true,
            logging: true,
            entities: [ObjectPost_1.ObjectPost, user_1.User, ObjectComment_1.ObjectComment, ObjectFollowers_1.followers],
        });
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [TestReolver_1.TestResolver, UserResolver_1.UserResolver, AuthorizationReolver_1.AuthorizationReolver, PostResolver_1.PostResolver, FollowerResolver_1.FollowerResolver],
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
const ObjectFollowers_1 = __webpack_require__(144);
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
    type_graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "token", void 0);
__decorate([
    typeorm_1.OneToMany(() => ObjectPost_1.ObjectPost, (post) => post.user),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], User.prototype, "post", void 0);
__decorate([
    typeorm_1.OneToMany(() => ObjectFollowers_1.followers, fol => fol.userId_2),
    __metadata("design:type", Array)
], User.prototype, "followers", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "follower_num", void 0);
User = __decorate([
    typeorm_1.Entity("users"),
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
    constructor(body, post) {
        super();
        this.body = body;
        this.PostId = post;
    }
};
__decorate([
    type_graphql_1.Field(() => ObjectPost_1.ObjectPost),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", ObjectPost_1.ObjectPost)
], ObjectComment.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], ObjectComment.prototype, "body", void 0);
__decorate([
    type_graphql_1.Field(() => ObjectPost_1.ObjectPost),
    typeorm_1.ManyToOne(() => ObjectPost_1.ObjectPost, (post) => post.id),
    __metadata("design:type", ObjectPost_1.ObjectPost)
], ObjectComment.prototype, "PostId", void 0);
ObjectComment = __decorate([
    typeorm_1.Entity("comments"),
    type_graphql_1.ObjectType(),
    __metadata("design:paramtypes", [String, ObjectPost_1.ObjectPost])
], ObjectComment);
exports.ObjectComment = ObjectComment;


/***/ }),

/***/ 144:
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
exports.followers = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
const user_1 = __webpack_require__(287);
let followers = class followers {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], followers.prototype, "user1", void 0);
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], followers.prototype, "user2", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_1.User, userId_2 => userId_2.followers),
    typeorm_1.JoinColumn({ name: "user2" }),
    __metadata("design:type", Array)
], followers.prototype, "userId_2", void 0);
followers = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], followers);
exports.followers = followers;


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
exports.ObjectPost = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
const user_1 = __webpack_require__(287);
const ObjectComment_1 = __webpack_require__(606);
let ObjectPost = class ObjectPost extends typeorm_1.BaseEntity {
    constructor(description, user) {
        super();
        this.description = description;
        this.user = user;
    }
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], ObjectPost.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: "text" }),
    __metadata("design:type", String)
], ObjectPost.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => ObjectComment_1.ObjectComment, (comments) => comments.id),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], ObjectPost.prototype, "comments", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Boolean)
], ObjectPost.prototype, "isActive", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.ManyToOne(() => user_1.User, (user) => user.post),
    typeorm_1.JoinColumn(),
    __metadata("design:type", String)
], ObjectPost.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], ObjectPost.prototype, "username", void 0);
ObjectPost = __decorate([
    typeorm_1.Entity("Posts"),
    type_graphql_1.ObjectType(),
    __metadata("design:paramtypes", [String, String])
], ObjectPost);
exports.ObjectPost = ObjectPost;


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
], CreatePostInput.prototype, "ownerId", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9NaWRkbGV3YXJlL21pZGRsZXdhcmUudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvUmVvbHZlcnMvQXV0aG9yaXphdGlvblJlb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvUmVvbHZlcnMvRm9sbG93ZXJSZXNvbHZlci50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9SZW9sdmVycy9Qb3N0UmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvUmVvbHZlcnMvVGVzdFJlb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvUmVvbHZlcnMvVXNlclJlc29sdmVyLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3R5cGVzL1VzZXIvdXNlci50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9lbnRpdHkvT2JqZWN0Q29tbWVudC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9lbnRpdHkvT2JqZWN0Rm9sbG93ZXJzLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3R5cGVzL2VudGl0eS9PYmplY3RQb3N0LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3R5cGVzL2lucHV0VHlwZS9JbnB1dFBvc3QudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvaW5wdXRUeXBlL0xvZ2luSW5wdXQudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvaW5wdXRUeXBlL1VzZXJBcmdzLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3V0aWxpdGVzL3Rva2VuL2tleXMudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdXRpbGl0ZXMvdG9rZW4vc2lnbk9wdGlvbi50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy92YWxpZGF0ZS92YWxpZGF0ZUVtYWlsLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3ZhbGlkYXRlL3ZhbGlkYXRlVXNlcm5hbWUudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJiY3J5cHRqc1wiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwiY2xhc3MtdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcInJlZmxlY3QtbWV0YWRhdGFcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcInR5cGUtZ3JhcGhxbFwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwidHlwZW9ybVwiIiwid2VicGFjazovL2NvcHlzaGl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvcHlzaGl0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1EQUFvQztBQUk3QixNQUFNLFNBQVMsR0FBaUIsQ0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQVVwRSxPQUFPLENBQUMsR0FBRyxDQUFFLE9BQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sS0FBSyxHQUFJLE9BQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN6RCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUU5QixJQUFHLENBQUMsSUFBSTtRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUM7SUFFckQsT0FBTyxJQUFJLEVBQUU7QUFFakIs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QUFXO1lBQzFCLFlBQVksRUFBRSxZQUFZO1lBQzFCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsU0FBUyxFQUFFLGdDQUFnQztTQUM5QyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDO0FBVkQsd0RBVUM7Ozs7Ozs7O0FDMUJELDJDOzs7Ozs7O0FDQUEsc0M7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLDBDOzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7QUNBQSwwQzs7Ozs7OztBQ0FBLHFDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1pZGRsZXdhcmVGbiB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cblxuXG5leHBvcnQgY29uc3QgY2hlY2tVc2VyOiBNaWRkbGV3YXJlRm4gPSBhc3luYyAoeyBjb250ZXh0LCBpbmZvfSwgbmV4dCkgPT4ge1xuICAgIC8vIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiB8fCBcIlwiO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbiAgICAvLyBjb25zdCB1c2VyID0gand0LmRlY29kZSh0b2tlbik7XG4gICAgICBcbiAgICAvLyBpZiAoIXVzZXIpIHtcbiAgICAvLyAgIHRocm93IG5ldyBFcnJvciAoXCJIaVwiKTtcbiAgICAvLyB9IFxuXG4gICAgLy8gcmV0dXJuIHsgdXNlciB9O1xuICAgIGNvbnNvbGUubG9nKChjb250ZXh0IGFzIGFueSkucmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbik7XG4gICAgY29uc3QgdG9rZW4gPSAoY29udGV4dCBhcyBhbnkpLnJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XG4gICAgY29uc3QgdXNlciA9IGp3dC5kZWNvZGUodG9rZW4pXG5cbiAgICBpZighdXNlcikgdGhyb3cgbmV3IEVycm9yKFwieW91IGhhdmUgdG8gYmUgbG9nZ2VkIGluXCIpXG5cbiAgICByZXR1cm4gbmV4dCgpXG4gICAgXG59O1xuXG5cbiIsImltcG9ydCB7IEFyZ3MsIE11dGF0aW9uLCBRdWVyeSwgUmVzb2x2ZXIgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBnZXRSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7IExvZ2luQXJncyB9IGZyb20gXCIuLi90eXBlcy9pbnB1dFR5cGUvTG9naW5JbnB1dFwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgQXV0aG9yaXphdGlvblJlb2x2ZXIge1xuICBAUXVlcnkoKCkgPT4gVXNlcilcbiAgYXN5bmMgbG9naW4oQEFyZ3MoKSB0aGVQYXJhbWV0cjogTG9naW5BcmdzKTogUHJvbWlzZTxVc2VyIHwgbnVsbCB8IHZvaWQ+IHtcbiAgICBjb25zdCBUaGVVc2VyID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShVc2VyKTtcblxuICAgIGNvbnN0IFRoZUVtYWlsID0gdGhlUGFyYW1ldHIuZW1haWw7XG4gICAgY29uc3QgVGhlVXNlcm5hbWUgPSB0aGVQYXJhbWV0ci51c2VybmFtZTtcbiAgICBjb25zdCBUaGVQYXNzd29yZCA9IHRoZVBhcmFtZXRyLnBhc3N3b3JkO1xuXG4gICAgY29uc3QgRW1haWxGaW5kID0gYXdhaXQgVGhlVXNlci5maW5kT25lKHsgd2hlcmU6IHsgZW1haWw6IFRoZUVtYWlsIH0gfSk7XG4gICAgY29uc3QgVXNlcm5hbWVGaW5kID0gYXdhaXQgVGhlVXNlci5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7IHVzZXJuYW1lOiBUaGVVc2VybmFtZSB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFFbWFpbEZpbmQgJiYgIVVzZXJuYW1lRmluZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKEVtYWlsRmluZCkge1xuICAgICAgY29uc3QgUGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICBUaGVQYXNzd29yZCxcbiAgICAgICAgRW1haWxGaW5kIS5wYXNzd29yZFxuICAgICAgKTtcbiAgICAgIGlmICghUGFzc3dvcmRNYXRjaCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBFbWFpbEZpbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFVzZXJuYW1lRmluZCkge1xuICAgICAgY29uc3QgUGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICBUaGVQYXNzd29yZCxcbiAgICAgICAgVXNlcm5hbWVGaW5kIS5wYXNzd29yZFxuICAgICAgKTtcbiAgICAgIGlmICghUGFzc3dvcmRNYXRjaCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVc2VybmFtZUZpbmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBBcmcsIEN0eCwgTXV0YXRpb24sIFJlc29sdmVyLCBVc2VNaWRkbGV3YXJlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXMvY29udGV4dC9NeUNvbnRleHRcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IHsgY2hlY2tVc2VyIH0gZnJvbSBcIi4uL01pZGRsZXdhcmUvbWlkZGxld2FyZVwiO1xuLy8gaW1wb3J0IHsgSW5wdXRGb2xsb3dlciB9IGZyb20gXCIuLi90eXBlcy9pbnB1dFR5cGUvSW5wdXRGb2xsb3dlclwiO1xuaW1wb3J0IHsgZm9sbG93ZXJzIH0gZnJvbSBcIi4uL3R5cGVzL2VudGl0eS9PYmplY3RGb2xsb3dlcnNcIjtcbmltcG9ydCB7IFB1YmxpY0tleSB9IGZyb20gXCIuLi91dGlsaXRlcy90b2tlbi9rZXlzXCI7XG4vLyBpbXBvcnQgeyB0b2tlbklkIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9Gb2xsb3dJbnRlcmZhY2VcIjtcblxuQFJlc29sdmVyKClcbmV4cG9ydCBjbGFzcyBGb2xsb3dlclJlc29sdmVyIHtcbi8vICAgIEBNdXRhdGlvbigoKSA9PiBVc2VyLCB7bnVsbGFibGU6IHRydWV9KVxuLy8gICAgYXN5bmMgZm9sbG93KFxuLy8gICAgICAgIEBBcmcoXCJtZVwiKSBteV9pZDogU3RyaW5nLFxuLy8gICAgICAgIEBBcmcoXCJ0b1wiKSBoaXNfaWQ6IFN0cmluZ1xuLy8gICAgKSB7XG4vLyAgICAgY29uc3QgdXNlclJlcCA9IGF3YWl0IGdldFJlcG9zaXRvcnkoVXNlcik7XG4vLyAgICAgY29uc3QgbWVPYmogPSBhd2FpdCB1c2VyUmVwLmZpbmRPbmUoeyB3aGVyZTogeyBpZDogbXlfaWQgfX0pO1xuLy8gICAgIGNvbnN0IHRvT2JqID0gYXdhaXQgdXNlclJlcC5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IGhpc19pZCB9fSk7XG4vLyAgICAgaWYgKCFtZU9iaikgcmV0dXJuO1xuLy8gICAgIGlmICghdG9PYmopIHJldHVybjtcbi8vICAgICB0b09iaiEuZm9sbG93ZXJzSW5mbyA9IFttZU9iaiFdO1xuLy8gICAgIHRvT2JqPy5zYXZlKCk7XG4vLyAgICAgY29uc3QgZmluZEZvbGxvdyA9IGF3YWl0IHVzZXJSZXAuZmluZCh7d2hlcmU6IHtyZWxhdGlvbnM6IFtVc2VyXX19KTsgXG4vLyAgICAgY29uc3QgRm9sbG93Q291bnQgPSBhd2FpdCBmaW5kRm9sbG93LmNvdW50KClcbi8vICAgICByZXR1cm4gbWVPYmo7XG5cblxuLy8gICAgfSBcblxuICAgIEBVc2VNaWRkbGV3YXJlKGNoZWNrVXNlcilcbiAgICBATXV0YXRpb24oKCkgPT4gVXNlciwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICAgIGFzeW5jIGZvbGxvdyhcbiAgICAgICAgLy8gQEFyZyhcImZyb21cIikgbXlfaWQ6IFN0cmluZyxcbiAgICAgICAgQEFyZyhcInRvXCIpIGhpc19pZDogU3RyaW5nLFxuICAgICAgICBAQ3R4KCkgY3R4OiBNeUNvbnRleHQsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IHVzZXJSZXAgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFVzZXIpO1xuICAgICAgICBjb25zdCB0b09iaiA9IGF3YWl0IHVzZXJSZXAuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiBoaXNfaWR9fSk7XG5cbiAgICAgICAgaWYgKCF0b09iaikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGdldFRva2VuID0gY3R4LnJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XG4gICAgICAgIFxuXG5cbiAgICAgICAgY29uc3QgdG9rZW5WZXIgPSBqd3QudmVyaWZ5KGdldFRva2VuISwgUHVibGljS2V5KTtcbiAgICAgICAgY29uc3QgdG9rZW5EZWMgPSBqd3QuZGVjb2RlKGdldFRva2VuISk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHRva2VuVmVyKVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgfVxuICAgXG4gICBcbn0iLCJpbXBvcnQge1xuICBBcmcsXG4gIEFyZ3MsXG4gIFxuICAvLyBBcmdzLFxuICBNdXRhdGlvbixcbiAgUXVlcnksXG4gIFJlc29sdmVyLFxuICBVc2VNaWRkbGV3YXJlLFxuICAvLyBVc2VNaWRkbGV3YXJlLFxufSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBPYmplY3RQb3N0IH0gZnJvbSBcIi4uL3R5cGVzL2VudGl0eS9PYmplY3RQb3N0XCI7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IHsgQ3JlYXRlUG9zdElucHV0IH0gZnJvbSBcIi4uL3R5cGVzL2lucHV0VHlwZS9JbnB1dFBvc3RcIjtcbmltcG9ydCB7IGdldFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xuLy8gaW1wb3J0IHsgTG9nQWNjZXNzIH0gZnJvbSBcIi4uL21pZGRsZXdhcmUvY2hlY2tJbnB1dFwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3R5cGVzL1VzZXIvdXNlclwiO1xuaW1wb3J0IHsgTXlDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzL2NvbnRleHQvTXlDb250ZXh0XCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjaGVja1VzZXIgfSBmcm9tIFwiLi4vTWlkZGxld2FyZS9taWRkbGV3YXJlXCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgUG9zdFJlc29sdmVyIHtcbiAgQFVzZU1pZGRsZXdhcmUoY2hlY2tVc2VyKVxuICBATXV0YXRpb24oKCkgPT4gT2JqZWN0UG9zdCwgeyBuYW1lOiBcImNyZWF0ZVBvc3RCeUlucHV0XCIsIG51bGxhYmxlOiB0cnVlIH0pXG4gIGFzeW5jIGNyZWF0ZVBvc3RCeUlucHV0KFxuICAgIEBBcmdzKCkgc2luZ2xlUGFyYW1ldHI6IENyZWF0ZVBvc3RJbnB1dCxcbiAgICBcbiAgKTogUHJvbWlzZTwgT2JqZWN0UG9zdCB8IG51bGwgPiB7XG4gICAgY29uc3QgVXNlclJlcCA9IGF3YWl0IGdldFJlcG9zaXRvcnkoVXNlcik7XG4gICAgY29uc3QgVXNlck9iaiA9IGF3YWl0IFVzZXJSZXAuZmluZE9uZSh7IGlkOiBzaW5nbGVQYXJhbWV0ci5vd25lcklkfSk7IFxuICAgIFxuICAgIGNvbnN0IFBvc3RPYmogPSBuZXcgT2JqZWN0UG9zdChzaW5nbGVQYXJhbWV0ci5kZXNjcmlwdGlvbiwgVXNlck9iaj8uaWQpO1xuICAgIFBvc3RPYmoudXNlcm5hbWUgPSBVc2VyT2JqIS51c2VybmFtZTtcbiAgICBQb3N0T2JqLnNhdmUoKTtcblxuICAgIHJldHVybiBQb3N0T2JqO1xuXG4gIH1cblxuICBAUXVlcnkoKCkgPT4gW09iamVjdFBvc3RdLCB7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGFzeW5jIGdldFBvc3RzKFxuICAgIEBBcmcoXCJpZFwiKSB1c2VySWQ6IFN0cmluZyBcbiAgKTogUHJvbWlzZTxPYmplY3RQb3N0W10gfCBudWxsIHwgdW5kZWZpbmVkPiB7XG4gICAgY29uc3QgUG9zdFJlcCA9IGF3YWl0IGdldFJlcG9zaXRvcnkoT2JqZWN0UG9zdCk7XG5cbiAgICBjb25zdCBQb3N0T2JqID0gYXdhaXQgUG9zdFJlcC5maW5kQW5kQ291bnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXNlcjogdXNlcklkXG4gICAgICB9LFxuICAgICAgdGFrZTogNVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFBvc3RPYmpbMF07XG5cblxuICB9XG59XG4iLCJpbXBvcnQgeyBRdWVyeSwgUmVzb2x2ZXIsIFVzZU1pZGRsZXdhcmUgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBjaGVja1VzZXIgfSBmcm9tIFwiLi4vTWlkZGxld2FyZS9taWRkbGV3YXJlXCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgVGVzdFJlc29sdmVyIHtcbiAgQFVzZU1pZGRsZXdhcmUoY2hlY2tVc2VyKVxuICBAUXVlcnkoKCkgPT4gU3RyaW5nLCB7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGFzeW5jIGhlbGxvV29ybGQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gXCJIZWxsbyBXb3JsZCFcIjtcbiAgfVxufVxuIiwiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IEFyZ3MsIEN0eCwgTXV0YXRpb24sIFJlc29sdmVyLCBVc2VNaWRkbGV3YXJlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XG4vLyBpbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9NeUNvbnRleHRcIjtcbmltcG9ydCB7IFVzZXJBcmdzIH0gZnJvbSBcIi4uL3R5cGVzL2lucHV0VHlwZS9Vc2VyQXJnc1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi90eXBlcy9Vc2VyL3VzZXJcIjtcbmltcG9ydCB7IFByaXZhdGVLZXksIFB1YmxpY0tleSB9IGZyb20gXCIuLi91dGlsaXRlcy90b2tlbi9rZXlzXCI7XG5pbXBvcnQgeyBTaWduT3B0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGVzL3Rva2VuL3NpZ25PcHRpb25cIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXMvY29udGV4dC9NeUNvbnRleHRcIjtcbmltcG9ydCB7IGNoZWNrVXNlciB9IGZyb20gXCIuLi9NaWRkbGV3YXJlL21pZGRsZXdhcmVcIjtcblxuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIFVzZXJSZXNvbHZlciB7XG4gIFxuICBATXV0YXRpb24oKCkgPT4gU3RyaW5nKVxuICBhc3luYyByZWdpc3RlcihcbiAgICBAQXJncygpIHNpbmdsZVBhcmFtZXRyOiBVc2VyQXJncyxcbiAgICApOiBQcm9taXNlPFN0cmluZyB8IHZvaWQ+IHtcbiAgICBjb25zdCByZXR1cm5Vc2VyID0gbmV3IFVzZXIoKTtcbiAgICByZXR1cm5Vc2VyLmZpcnN0TmFtZSA9IHNpbmdsZVBhcmFtZXRyLmZpcnN0TmFtZTtcbiAgICByZXR1cm5Vc2VyLmxhc3ROYW1lID0gc2luZ2xlUGFyYW1ldHIubGFzdE5hbWU7XG4gICAgcmV0dXJuVXNlci5lbWFpbCA9IHNpbmdsZVBhcmFtZXRyLmVtYWlsO1xuICAgIFxuICAgIHJldHVyblVzZXIucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChzaW5nbGVQYXJhbWV0ci5wYXNzd29yZCwgMTIpO1xuICAgIHJldHVyblVzZXIudXNlcm5hbWUgPSBzaW5nbGVQYXJhbWV0ci51c2VybmFtZTtcbiAgICBhd2FpdCByZXR1cm5Vc2VyLnNhdmUoKTtcbiAgICBjb25zdCB0b2tlblVzZXIgPSBqd3Quc2lnbihcbiAgICAgIHtcbiAgICAgICAgaWQ6IHJldHVyblVzZXIuaWQsXG4gICAgICAgIGZpcnN0TmFtZTogcmV0dXJuVXNlci5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiByZXR1cm5Vc2VyLmxhc3ROYW1lLFxuICAgICAgICBlbWFpbDogcmV0dXJuVXNlci5lbWFpbCxcbiAgICAgICAgdXNlcm5hbWU6IHJldHVyblVzZXIudXNlcm5hbWUsXG4gICAgICB9LFxuICAgICAgUHJpdmF0ZUtleSxcbiAgICAgIFNpZ25PcHRpb25cbiAgICApO1xuICAgIHJldHVyblVzZXIudG9rZW4gPSB0b2tlblVzZXI7XG4gICAgYXdhaXQgcmV0dXJuVXNlci5zYXZlKCk7XG5cbiAgICByZXR1cm4gdG9rZW5Vc2VyO1xuICB9XG59XG4iLCJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgeyBidWlsZFNjaGVtYSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gXCJhcG9sbG8tc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7IE9iamVjdFBvc3QgfSBmcm9tIFwiLi90eXBlcy9lbnRpdHkvT2JqZWN0UG9zdFwiO1xuaW1wb3J0IHsgVXNlclJlc29sdmVyIH0gZnJvbSBcIi4vUmVvbHZlcnMvVXNlclJlc29sdmVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdHlwZXMvVXNlci91c2VyXCI7XG5pbXBvcnQgeyBBdXRob3JpemF0aW9uUmVvbHZlciB9IGZyb20gXCIuL1Jlb2x2ZXJzL0F1dGhvcml6YXRpb25SZW9sdmVyXCI7XG5pbXBvcnQgeyBPYmplY3RDb21tZW50IH0gZnJvbSBcIi4vdHlwZXMvZW50aXR5L09iamVjdENvbW1lbnRcIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBQb3N0UmVzb2x2ZXIgfSBmcm9tIFwiLi9SZW9sdmVycy9Qb3N0UmVzb2x2ZXJcIjtcbmltcG9ydCB7IFRlc3RSZXNvbHZlciB9IGZyb20gXCIuL1Jlb2x2ZXJzL1Rlc3RSZW9sdmVyXCI7XG4vLyBpbXBvcnQgeyBGb2xsb3dlclJlc29sdmVyIH0gZnJvbSBcIi4vUmVvbHZlcnMvRm9sbG93ZXJSZXNvbHZlclwiO1xuaW1wb3J0IHsgZm9sbG93ZXJzIH0gZnJvbSBcIi4vdHlwZXMvZW50aXR5L09iamVjdEZvbGxvd2Vyc1wiO1xuaW1wb3J0IHsgRm9sbG93ZXJSZXNvbHZlciB9IGZyb20gXCIuL1Jlb2x2ZXJzL0ZvbGxvd2VyUmVzb2x2ZXJcIjtcblxuXG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwNDA7XG5cbmFzeW5jIGZ1bmN0aW9uIEJvb3RzdHJhcCgpIHtcbiAgY29uc3QgY29ubmVjdGlvblBvc3QgPSBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKHtcbiAgICBuYW1lOiBcImRlZmF1bHRcIixcbiAgICB0eXBlOiBcInBvc3RncmVzXCIsXG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICBwb3J0OiA1NDMyLFxuICAgIHVzZXJuYW1lOiBcImlybGVudHVybHlraGFub3ZcIixcbiAgICBwYXNzd29yZDogXCIyMTA2XCIsXG4gICAgZGF0YWJhc2U6IFwicG9zdHNcIixcbiAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICBsb2dnaW5nOiB0cnVlLFxuICAgIGVudGl0aWVzOiBbT2JqZWN0UG9zdCwgVXNlciwgT2JqZWN0Q29tbWVudCwgZm9sbG93ZXJzXSxcbiAgfSk7XG5cbiAgY29uc3Qgc2NoZW1hID0gYXdhaXQgYnVpbGRTY2hlbWEoe1xuICAgIHJlc29sdmVyczogW1Rlc3RSZXNvbHZlciwgVXNlclJlc29sdmVyLCBBdXRob3JpemF0aW9uUmVvbHZlciwgUG9zdFJlc29sdmVyLCBGb2xsb3dlclJlc29sdmVyXSxcbiAgfSk7XG5cbiAgY29uc3QgcHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcblxuICBjb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICBwbGF5Z3JvdW5kOiB0cnVlLFxuICAgIC8vIGNvbnRleHQ6ICh7IHJlcSB9KSA9PiB7XG4gICAgLy8gICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gfHwgXCJcIjtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbiAgICAvLyAgIGNvbnN0IENoZWNrUmVnID0gcmVxLmJvZHkuZmluZE9uZSh7IHdoZXJlOiB7IG9wZXJhdGlvbk5hbWU6ICdyZWdpc3Rlcid9fSlcbiAgICAvLyAgIGNvbnN0IHVzZXIgPSBqd3QuZGVjb2RlKHRva2VuKTtcblxuICAgIC8vICAgaWYgKCF1c2VyKSB7XG4gICAgLy8gICAgIHRocm93IG5ldyBFcnJvciAoXCJIaVwiKTtcbiAgICAvLyAgIH0gXG5cbiAgICAvLyAgIGlmICghQ2hlY2tSZWcpIHJldHVybiB7IHVzZXIgfVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuXG4gICAgLy8gICByZXR1cm4geyB1c2VyIH07XG4gICAgLy8gfSxcbiAgICBjb250ZXh0OiAoeyByZXEgfSkgPT4gKHsgcmVxIH0pXG4gIH0pO1xuXG4gIHNlcnZlci5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIHN0YXJ0ZWQsIGJpdGNoXCIpO1xuICB9KTtcblxuICAvLyBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgc2VydmVyLmxpc3RlbihQT1JUKTtcbiAgLy8gY29uc29sZS5sb2coXCJTRVJWRUVSIFNUQVJURURcIik7XG59XG5cbkJvb3RzdHJhcCgpO1xuIiwiaW1wb3J0IHsgRmllbGQsIElELCBPYmplY3RUeXBlLCBSb290IH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHtcbiAgQmFzZUVudGl0eSxcbiAgQ29sdW1uLFxuICBFbnRpdHksXG4gIEpvaW5Db2x1bW4sXG4gIEpvaW5UYWJsZSxcbiAgTWFueVRvTWFueSxcbiAgT25lVG9NYW55LFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxufSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgZm9sbG93ZXJzIH0gZnJvbSBcIi4uL2VudGl0eS9PYmplY3RGb2xsb3dlcnNcIjtcbmltcG9ydCB7IE9iamVjdFBvc3QgfSBmcm9tIFwiLi4vZW50aXR5L09iamVjdFBvc3RcIjtcblxuXG5cbkBFbnRpdHkoXCJ1c2Vyc1wiKVxuQE9iamVjdFR5cGUoKVxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiAgQEZpZWxkKCgpID0+IElEKVxuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbihcInV1aWRcIilcbiAgaWQhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQENvbHVtbigpXG4gIGZpcnN0TmFtZSE6IHN0cmluZztcblxuICBARmllbGQoKVxuICBAQ29sdW1uKClcbiAgbGFzdE5hbWUhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQENvbHVtbihcInRleHRcIiwgeyB1bmlxdWU6IHRydWUgfSlcbiAgZW1haWwhOiBzdHJpbmc7XG5cbiAgLy8gQEZpZWxkKClcbiAgQENvbHVtbigpXG4gIHBhc3N3b3JkITogc3RyaW5nOyAgXG5cbiAgQEZpZWxkKClcbiAgQENvbHVtbigpXG4gIHVzZXJuYW1lITogc3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gIEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxuICB0b2tlbiE6IHN0cmluZztcblxuICBAT25lVG9NYW55KCgpID0+IE9iamVjdFBvc3QsIChwb3N0OiBPYmplY3RQb3N0KSA9PiBwb3N0LnVzZXIpXG4gIEBKb2luQ29sdW1uKClcbiAgcG9zdCE6IE9iamVjdFBvc3RbXTtcblxuICAvLyBARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuICAvLyBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgLy8gZm9sbG93ZXJzPzogTnVtYmVyO1xuXG4gIC8vIEBNYW55VG9NYW55KCgpID0+IFVzZXIpXG4gIC8vIEBKb2luVGFibGUoKVxuICAvLyBmb2xsb3dlcnNJbmZvPzogVXNlcltdO1xuXG4gIEBPbmVUb01hbnkoKCkgPT4gZm9sbG93ZXJzLCBmb2wgPT4gZm9sLnVzZXJJZF8yKVxuICBmb2xsb3dlcnMhOiBmb2xsb3dlcnNbXTtcblxuICBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgZm9sbG93ZXJfbnVtPzogTnVtYmVyOyAgXG5cbiAgLy8gQENvbHVtbih7bnVsbGFibGU6IHRydWV9KVxuICAvLyBmb2xsb3dlZF9pbmZvPzogU3RyaW5nW107XG4gIFxufVxuIiwiaW1wb3J0IHsgRmllbGQsIElELCBPYmplY3RUeXBlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHtcbiAgQmFzZUVudGl0eSxcbiAgQ29sdW1uLFxuICBFbnRpdHksXG4gIEpvaW5Db2x1bW4sXG4gIEpvaW5UYWJsZSxcbiAgTWFueVRvTWFueSxcbiAgTWFueVRvT25lLFxuICBQcmltYXJ5Q29sdW1uLFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxufSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL3VzZXJcIjtcbmltcG9ydCB7IE9iamVjdFBvc3QgfSBmcm9tIFwiLi9PYmplY3RQb3N0XCI7XG5cbkBFbnRpdHkoXCJjb21tZW50c1wiKVxuQE9iamVjdFR5cGUoKVxuZXhwb3J0IGNsYXNzIE9iamVjdENvbW1lbnQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiAgQEZpZWxkKCgpID0+IE9iamVjdFBvc3QpXG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKFwidXVpZFwiKVxuICBpZCE6IE9iamVjdFBvc3Q7XG5cbiAgLy8gQEZpZWxkKClcbiAgLy8gQE1hbnlUb09uZShcIlVzZXJcIiwgKHVzZXI6IFVzZXIpID0+IHVzZXIudXNlcm5hbWUpXG4gIC8vIHVzZXIhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGJvZHkhOiBzdHJpbmc7XG5cbiAgLy8gQEZpZWxkKClcbiAgLy8gQE1hbnlUb09uZSgnVXNlcicsICh1c2VyOiBVc2VyKSA9PiB1c2VyLmlkKVxuICAvLyBASm9pblRhYmxlKClcbiAgLy8gb3duZXJJZCE6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gT2JqZWN0UG9zdClcbiAgQE1hbnlUb09uZSgoKSA9PiBPYmplY3RQb3N0LCAocG9zdDogT2JqZWN0UG9zdCkgPT4gcG9zdC5pZClcbiAgUG9zdElkITogT2JqZWN0UG9zdDtcblxuICBjb25zdHJ1Y3Rvcihib2R5Pzogc3RyaW5nLCBwb3N0PzogT2JqZWN0UG9zdCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5ib2R5ID0gYm9keSE7XG4gICAgdGhpcy5Qb3N0SWQgPSBwb3N0ITtcbiAgfSBcbn1cbiIsImltcG9ydCB7IE9iamVjdFR5cGUgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBFbnRpdHksIEpvaW5Db2x1bW4sIE1hbnlUb09uZSwgUHJpbWFyeUNvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL1VzZXIvdXNlclwiO1xuXG5cblxuQEVudGl0eSgpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgZm9sbG93ZXJzIHtcbiAgICBAUHJpbWFyeUNvbHVtbigpXG4gICAgdXNlcjEhOiBTdHJpbmc7XG4gICBcbiAgICBAUHJpbWFyeUNvbHVtbigpXG4gICAgdXNlcjIhOiBTdHJpbmc7XG5cbiAgICBATWFueVRvT25lKCgpID0+IFVzZXIsIHVzZXJJZF8yID0+IHVzZXJJZF8yLmZvbGxvd2VycylcbiAgICBASm9pbkNvbHVtbih7IG5hbWU6IFwidXNlcjJcIn0pXG4gICAgdXNlcklkXzIhOiBVc2VyW107XG5cblxuXG59IiwiaW1wb3J0IHsgT2JqZWN0VHlwZSwgSUQsIEZpZWxkIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHtcbiAgQmFzZUVudGl0eSxcbiAgQ29sdW1uLFxuICBFbnRpdHksXG4gIEpvaW5Db2x1bW4sXG4gIEpvaW5UYWJsZSxcbiAgTWFueVRvT25lLFxuICBPbmVUb01hbnksXG4gIE9uZVRvT25lLFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxufSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL3VzZXJcIjtcbmltcG9ydCB7IE9iamVjdENvbW1lbnQgfSBmcm9tIFwiLi9PYmplY3RDb21tZW50XCI7XG5cbkBFbnRpdHkoXCJQb3N0c1wiKVxuQE9iamVjdFR5cGUoKVxuZXhwb3J0IGNsYXNzIE9iamVjdFBvc3QgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiAgQEZpZWxkKCgpID0+IElEKVxuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbihcInV1aWRcIilcbiAgLy8gQE9uZVRvTWFueSgoKSA9PiBPYmplY3RDb21tZW50LCAoY29tOiBPYmplY3RDb21tZW50KSA9PiBjb20uUG9zdElkKVxuICBpZCE6IFN0cmluZztcblxuICBARmllbGQoKVxuICBAQ29sdW1uKHsgdHlwZTogXCJ0ZXh0XCIgfSlcbiAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG5cbiAgQE9uZVRvTWFueShcbiAgICAoKSA9PiBPYmplY3RDb21tZW50LFxuICAgIChjb21tZW50czogT2JqZWN0Q29tbWVudCkgPT4gY29tbWVudHMuaWRcbiAgKVxuICBASm9pbkNvbHVtbigpXG4gIGNvbW1lbnRzITogT2JqZWN0Q29tbWVudFtdO1xuXG4gIC8vIEBGaWVsZCgpXG4gIC8vIEBDb2x1bW4oKVxuICAvLyBsaWtlcz86IG51bWJlcjtcblxuICBARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgaXNBY3RpdmU/OiBib29sZWFuO1xuXG4gIEBGaWVsZCgpXG4gIEBNYW55VG9PbmUoKCkgPT4gVXNlciwgKHVzZXI6IFVzZXIpID0+IHVzZXIucG9zdClcbiAgQEpvaW5Db2x1bW4oKVxuICB1c2VyITogU3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gIEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZX0pXG4gIHVzZXJuYW1lITogU3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uPzogc3RyaW5nLCB1c2VyPzogU3RyaW5nKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiE7XG4gICAgdGhpcy51c2VyID0gdXNlciE7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFyZ3NUeXBlLCBGaWVsZCwgSW5wdXRUeXBlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuLy8gaW1wb3J0IHsgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbi8vIEBFbnRpdHkoKVxuQEFyZ3NUeXBlKClcbmV4cG9ydCBjbGFzcyBDcmVhdGVQb3N0SW5wdXQge1xuICBARmllbGQoKVxuICBvd25lcklkITogc3RyaW5nO1xuXG5cbiAgQEZpZWxkKClcbiAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBBcmdzVHlwZSwgRmllbGQgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5cbkBBcmdzVHlwZSgpXG5leHBvcnQgY2xhc3MgTG9naW5BcmdzIHtcbiAgQEZpZWxkKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgZW1haWw/OiBzdHJpbmc7XG5cbiAgQEZpZWxkKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgcGFzc3dvcmQhOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBJc0VtYWlsLCBMZW5ndGggfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBBcmdzVHlwZSwgRmllbGQgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBJc0VtYWlsQWxyZWFkeUV4aXN0IH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRlL3ZhbGlkYXRlRW1haWxcIjtcbmltcG9ydCB7IElzVXNlcm5hbWVBbHJlYWR5RXhpc3QgfSBmcm9tIFwiLi4vLi4vdmFsaWRhdGUvdmFsaWRhdGVVc2VybmFtZVwiO1xuXG5AQXJnc1R5cGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJBcmdzIHtcbiAgQEZpZWxkKClcbiAgQExlbmd0aCgxLCAxMDApXG4gIGZpcnN0TmFtZSE6IHN0cmluZztcblxuICBARmllbGQoKVxuICBATGVuZ3RoKDEsIDEwMClcbiAgbGFzdE5hbWUhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQElzRW1haWwoKVxuICBASXNFbWFpbEFscmVhZHlFeGlzdCh7IG1lc3NhZ2U6IFwiZW1haWwgaXMgYWxyZWFkeSBpbiB1c2VcIiB9KVxuICBlbWFpbCE6IHN0cmluZztcblxuICBARmllbGQoKVxuICBwYXNzd29yZCE6IHN0cmluZztcblxuICBARmllbGQoKVxuICBASXNVc2VybmFtZUFscmVhZHlFeGlzdCh7IG1lc3NhZ2U6IFwidXNlcm5hbWUgaXMgYWxyZWFkeSBpbiB1c2VcIiB9KVxuICB1c2VybmFtZSE6IHN0cmluZztcbn1cbiIsIlxuXG5leHBvcnQgY29uc3QgUHJpdmF0ZUtleSAgPSAgIGAtLS0tLUJFR0lOIFJTQSBQUklWQVRFIEtFWS0tLS0tXG5NSUlCUEFJQkFBSkJBTVNQNGIweEI2ZFNENHg5ZGF1ZUZ1WDU2MGw5SFJ5V29lWEFVMVZhK0VSY3hZUU9zamZtXG5ZeEtCMnhlZWxLOTJlYmNwMXVpMTBoQVR2YlppQlczY3hrOENBd0VBQVFKQkFJRnpaSzZ0a0tYUU5HOUkzT3NXXG5aV3cyQ0kvUWR4Q3gzNU9vOHZqZXZXeC9LUm1FSEJmd2tVaEtqOWtkSmdVLzVtcGMwV2dXRzR6NVdkRXJuYjlIXG51TGtDSVFEZ25YWEtnQzFGRm43NWVLdC9ocTNnNWhLWERQZ21WVFBQbC9TNlpuVE15d0loQU9BRzlRVXZHUnVQXG5NbWhwUW5YT29tL2pyWlhHQmYrKy8xK0VFeHZEWHlBTkFpRUFsZkhIdm9WT3N6NVBTVzc2M2Nra3Jtd29vTm14XG5sclZ1UHZrc0VIdHhJWDBDSUZ6emhnWTRuSHBLMStkcWhTRE1NNm1wRmdUbXZPWjRJUTFJaDRVbGN2cWhBaUVBXG5wbTUyRUluVGI0a3pMM1NzSnFnVXdUamVGU1RNN1UxaDI5akFWTDNpTjI4PVxuLS0tLS1FTkQgUlNBIFBSSVZBVEUgS0VZLS0tLS1gO1xuXG5leHBvcnQgY29uc3QgUHVibGljS2V5ID0gYC0tLS0tQkVHSU4gUFVCTElDIEtFWS0tLS0tXG5NRnd3RFFZSktvWklodmNOQVFFQkJRQURTd0F3U0FKQkFNU1A0YjB4QjZkU0Q0eDlkYXVlRnVYNTYwbDlIUnlXXG5vZVhBVTFWYStFUmN4WVFPc2pmbVl4S0IyeGVlbEs5MmViY3AxdWkxMGhBVHZiWmlCVzNjeGs4Q0F3RUFBUT09XG4tLS0tLUVORCBQVUJMSUMgS0VZLS0tLS1gIiwiaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuZXhwb3J0IHZhciBTaWduT3B0aW9uIDpqd3QuU2lnbk9wdGlvbnM9IHtcbiAgICBpc3N1ZXI6IFwiXCIsXG4gICAgc3ViamVjdDpcIlwiLFxuICAgIGF1ZGllbmNlOiBcIlwiLFxuICAgIGV4cGlyZXNJbjogXCIzNjVkXCIsXG4gICAgYWxnb3JpdGhtOiBcIlJTMjU2XCJcbn07IiwiaW1wb3J0IHsgcmVnaXN0ZXJEZWNvcmF0b3IsIFZhbGlkYXRpb25PcHRpb25zLCBWYWxpZGF0b3JDb25zdHJhaW50LCBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi90eXBlcy9Vc2VyL3VzZXJcIjtcbi8vIGltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4uL2VudGl0eS9PYmplY3RQb3N0XCI7XG4gXG4gXG4vLyBAVmFsaWRhdG9yQ29uc3RyYWludCh7IGFzeW5jOiB0cnVlIH0pXG4vLyBleHBvcnQgY2xhc3MgRmluYWxPd25lcklkXG4vLyAgICAgaW1wbGVtZW50cyBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIHtcbi8vICAgICAvLyB2YWxpZGF0ZShfb3duZXJJZDogc3RyaW5nKTogUHJvbWlzZTxQb3N0T2JqZWN0VHlwZSB8IG51bGw+IHtcbi8vICAgICAvLyAgICAgcmV0dXJuIFxuLy8gICAgIC8vIH1cbi8vIH1cblxuQFZhbGlkYXRvckNvbnN0cmFpbnQoeyBhc3luYzogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIElzRW1haWxBbHJlYWR5RXhpc3RDb25zdHJhaW50XG4gICAgaW1wbGVtZW50cyBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIHtcbiAgICB2YWxpZGF0ZShlbWFpbDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBVc2VyLmZpbmRPbmUoeyB3aGVyZTogeyBlbWFpbCB9IH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIElzRW1haWxBbHJlYWR5RXhpc3QodmFsaWRhdGVPcHRpb25zPzogVmFsaWRhdGlvbk9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0OiBPYmplY3QsIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJlZ2lzdGVyRGVjb3JhdG9yKHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBvcHRpb25zOiB2YWxpZGF0ZU9wdGlvbnMsXG4gICAgICAgICAgICBjb25zdHJhaW50czogW10sXG4gICAgICAgICAgICB2YWxpZGF0b3I6IElzRW1haWxBbHJlYWR5RXhpc3RDb25zdHJhaW50XG4gICAgICAgIH0pO1xuICAgIH07XG5cblxufSIsImltcG9ydCB7IHJlZ2lzdGVyRGVjb3JhdG9yLCBWYWxpZGF0aW9uT3B0aW9ucywgVmFsaWRhdG9yQ29uc3RyYWludCwgVmFsaWRhdG9yQ29uc3RyYWludEludGVyZmFjZSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG5cblxuXG5AVmFsaWRhdG9yQ29uc3RyYWludCh7IGFzeW5jOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgSXNVc2VybmFtZUFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICBpbXBsZW1lbnRzIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2Uge1xuICAgIHZhbGlkYXRlKHVzZXJuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJuYW1lIH0gfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSXNVc2VybmFtZUFscmVhZHlFeGlzdCh2YWxpZGF0ZU9wdGlvbnM/OiBWYWxpZGF0aW9uT3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3Q6IE9iamVjdCwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmVnaXN0ZXJEZWNvcmF0b3Ioe1xuICAgICAgICAgICAgdGFyZ2V0OiBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHZhbGlkYXRlT3B0aW9ucyxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzOiBbXSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogSXNVc2VybmFtZUFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICAgICAgfSk7XG4gICAgfTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3MtdmFsaWRhdG9yXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR5cGUtZ3JhcGhxbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oNjA3KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=