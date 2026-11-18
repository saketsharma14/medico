import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";

/**
 * Modular monolith. Each feature is a module under src/<feature>/ and talks to other
 * modules only through their exported services (docs/plan/06-architecture.md, section 2).
 */
@Module({ imports: [HealthModule] })
export class AppModule {}
