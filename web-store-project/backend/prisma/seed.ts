import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from '@prisma/client';
import { case } from "../../shared/data/case.json";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
    await prisma.role.deleteMany();
    await prisma.employee.deleteMany();

    await prisma.employee.createMany({
        data: employeeSeedData,
        skipDuplicates: true
    });

    for (const r of roleSeedData) {
        const employee = await prisma.employee.create({
            data: { name: r.employeeName, department: "Executive" }
        });
        await prisma.role.create({
            data: { role: r.role, employeeId: employee.id }
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });