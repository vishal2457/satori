import { serverError } from "proses-response";
import { success } from "proses-response";
import { Router } from "express";
import rmFetcher from "../../core/redmine/axios-instance";
const r = Router();

r.get("/", async (req, res) => {
  try {
    let users = await rmFetcher.get("users.json?limit=50");
    success(res, users.data, "users");
  } catch (error) {
    serverError(res, error);
  }
});

export default r;
