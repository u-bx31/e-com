import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/products",
		/^\/products\/\w+$/,
		"/contacts",
		"/api/webhook/clerk",
		"/not-found",
	],
	ignoredRoutes: ["/api/webhook/clerk",'/api/uploadthing'],
});

// Stop Middleware running on static files
export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};