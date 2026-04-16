import { Router } from "express";
import UserRouter from "../../modules/users/users.routes";
import AuthRouter from "../../modules/auth/auth.routes";
import ProjectsRouter from "../../modules/projects/projects.routes";
import TasksRouter from "../../modules/tasks/tasks.routes";
import CommentsRouter from "../../modules/comments/comments.routes";
import MembersRouter from "../../modules/members/members.routes";
import PlansRouter from "../../modules/plans/plans.routes";
import MembershipsRouter from "../../modules/memberships/memberships.routes";
import PaymentsRouter from "../../modules/payments/payments.routes";
import ClassesRouter from "../../modules/classes/classes.routes";
import NotificationsRouter from "../../modules/notifications/notifications.routes";
import ReportsRouter from "../../modules/reports/reports.routes";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/users", UserRouter);
router.use("/projects", ProjectsRouter);
router.use("/tasks", TasksRouter);
router.use("/comments", CommentsRouter);
router.use("/members", MembersRouter);
router.use("/plans", PlansRouter);
router.use("/memberships", MembershipsRouter);
router.use("/payments", PaymentsRouter);
router.use("/classes", ClassesRouter);
router.use("/notifications", NotificationsRouter);
router.use("/reports", ReportsRouter);

export default router;