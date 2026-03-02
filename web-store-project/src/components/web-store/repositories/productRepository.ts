import organization from "./organization.json"
import type { PartType } from "./PartTypes";

const executiveData: PartType[] = [];
const existingPartTypes: string[] = [];

for (const executive of organization) {
    executiveData.push(executive);

    if (!existingPartTypes.includes(executive.PartType)) {
        existingPartTypes.push(executive.PartType);
    }
}

export function fetchAllExecutives(): PartType[] {
    return executiveData;
}

export function fetchExistingPartTypes(): string[] {
    return existingPartTypes;
}

export function createExecutive(executive: PartType): PartType {
    executiveData.push(executive);
    if (!existingPartTypes.includes(executive.PartType)) {
        existingPartTypes.push(executive.PartType);
    }
    return executive;
}