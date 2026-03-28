[Authorize(Roles = "Admin")] [HttpGet("secure-data")] public IActionResult GetSecureData() { return Ok("Only admins can see this"); }
