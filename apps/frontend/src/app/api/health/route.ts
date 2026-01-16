export async function GET() {
  return Response.json({
    status: "healthy",
    message: "DevOps project is running!",
    timestamp: new Date().toISOString(),
  });
}
