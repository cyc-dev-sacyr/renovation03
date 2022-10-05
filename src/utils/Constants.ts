import * as strings from 'ActivitiesWebPartStrings';

export const CalendarFluentUINorthStar = {
    DAYS: [strings.Cal_Days_Sunday, strings.Cal_Days_Monday, strings.Cal_Days_Tuesday, strings.Cal_Days_Wednesday, strings.Cal_Days_Thursday, strings.Cal_Days_Friday, strings.Cal_Days_Saturday],
    SHORT_DAYS: [strings.Cal_ShortDays_Sunday, strings.Cal_ShortDays_Monday, strings.Cal_ShortDays_Tuesday, strings.Cal_ShortDays_Wednesday, strings.Cal_ShortDays_Thursday, strings.Cal_ShortDays_Friday, strings.Cal_ShortDays_Saturday],
    MONTHS: [strings.Cal_Months_January, strings.Cal_Months_February, strings.Cal_Months_March, strings.Cal_Months_April, strings.Cal_Months_May, strings.Cal_Months_June, strings.Cal_Months_July, strings.Cal_Months_August, strings.Cal_Months_September, strings.Cal_Months_October, strings.Cal_Months_November, strings.Cal_Months_December],
    SHORT_MONTHS: [strings.Cal_ShortMonths_January, strings.Cal_ShortMonths_February, strings.Cal_ShortMonths_March, strings.Cal_ShortMonths_April, strings.Cal_ShortMonths_May, strings.Cal_ShortMonths_June, strings.Cal_ShortMonths_July, strings.Cal_ShortMonths_August, strings.Cal_ShortMonths_September, strings.Cal_ShortMonths_October, strings.Cal_ShortMonths_November, strings.Cal_ShortMonths_December],
    INPUT_PLACEHOLDER: strings.Cal_Input_Placeholder,
    NEXT_MONTH_ARIA_LABEL: strings.Cal_NextMonth,
    NEXT_YEAR_ARIA_LABEL: strings.Cal_NextYear,
    PREV_MONTH_ARIA_LABEL: strings.Cal_PrevMonth,
    PREV_YEAR_ARIA_LABEL: strings.Cal_PrevYear,
};

export const TOP_ELEMENTS_QUERY = 50; //50
export const MODIFICATION_PERIOD_ELEMENTS_QUERY = 15;
export const MAX_ASSIGNEDTO = 10;

export const DEFAULT_LCID = 3082;

export enum ActivityStatesIds {
    Uninitiated = "8829240c-b9a3-4565-9108-a7ed90b1e53b",
    InProgress = "1b38c6b8-d095-411f-8741-f1bc97149627",
    Stopped = "16e016bd-7f53-483e-bc4d-79ac07bcd8ac",
    Finished = "e8e42f00-2d5d-42e4-9e31-0d39eabea6e5",
}

export enum ActivityProgressTypesIdsBD {
    DirectProgress = "62d474b3-22f5-4f3b-82ac-3e3395afbc74",
    TheoreticalMeasurement = "50cf68db-58ff-4e39-b3de-840297cfafcd",
    StepsMilestones = "3c67e25a-3c84-4e4f-bfad-6d2abf4fd6e3"
}

export enum IssuesStatesIds {
    InProgress = "3b8d979f-bca0-4bfe-a165-ed4b820416ea",
    Completed = "cf74094e-4366-484f-a741-0e7ae4c25715",
    Closed = "cae49bf9-a498-45f1-849c-2c34c1c67acd",
}

export enum IssuesPrioritiesIds {
    Low = "2719b101-e24a-4915-8e35-07a7f8af8289",
    Average = "9ae61a08-afe2-4ba1-8c05-3e90e45821f5",
    High = "b339166c-596b-452a-8fcb-a2718e672f51",
    Critical = "02c738e8-7089-48a8-9594-08061c7b84ae",
}

export enum IssuesCategories {
    Environment = "Medio ambiente",
    Topography = "Topografía",
    Quality = "Calidad",
    Permissions = "Permisos",
    Customer = "Cliente",
    Teams = "Equipos",
    Other = "Otro",
    Engineering = "Ingeniería",
    Logistics = "Logística",
    Subcontract = "Subcontrata",
    ExecutionErrors = "Errores de ejecución",
    ExecutionActivityTask = "Ejec. actividad/tarea"
}

export enum IssuesNotifierTypesIdsBD {
    Client = "6387d3ae-c049-4124-b1d6-68d1d9b694c8",
    Outsource = "978dcc76-a328-4ffb-b18d-2d1a42a21812",
    Internal = "349132e3-8c30-402e-9d65-e99ae74cc2c9",
    ThirdPart = "fa076df8-47de-4b36-bd01-7548f37dfc7b"
}

export enum IssuesResponsabilityTypesIdsBD {
    Client = "869811ee-ce7a-46f8-89e9-679bc10c9bf9",
    Outsource = "d7fb05fc-bb1a-4c27-b0f7-58f5819ea450",
    Internal = "a0175078-1371-4d6c-ae98-fbedd4bf7894",
    ThirdPart = "77bec5e5-156b-4d4a-8a27-521f422ddedf"
}


export enum IssuesRelatedActivitiesFilterIdsBD {
    NoFilter = null,
    FilterWithoutActivities = 1,
    FilterWithActivities = 2,
}

export enum ActivitiesRelatedIssuesFilterIdsBD {
    NoFilter = null,
    FilterWithoutIssues = 1,
    FilterWithIssues = 2,
}

//Permissions and Roles
export enum ProcessIds {
    Activities = "5523ddd2-e081-4f63-b55f-7ddbf9c0939a",
    Issues = "c0249402-19a5-4981-8930-e60add18e47e",
    IssuesTypes = "ae139179-7968-4100-9524-d4fb0e91dda1",
    Planning = "cbcf1951-5d28-43d5-937f-1e9fae1f4ba4",
    ConstructionManagement = "67f509c3-5aae-4211-a5a2-f6c2bc92f75d"
}

export enum UserRightsActivities {
    Read = "33be4d84-df6b-4710-9953-e80de9d7c9db",
    Creation = "f828ae70-1cbc-49be-9b23-1fc6ef9c0940",
    Edition = "45b6445a-3a45-45f4-a5c4-30d088f4a989",
    AdvancedEdition = "06ae5cb5-9c1f-4e77-acbe-ac69820d6078",
    TotalEdition = "ca21e52b-5eb7-41c3-a3a9-973a502048f2",
    Delete = "6d8136cb-72c3-4882-a352-c048ac989fcf"
}

export enum UserRightsIssues {
    Read = "4afe0468-1f6f-4ed0-bcaa-d99a1b696440",
    Creation = "40be067e-9583-4158-a585-42b027ed8d68",
    Edition = "33a9dd37-0961-4ecf-9232-fcfef1860107",
    AdvancedEdition = "cd640062-ef14-47f4-b080-3cedd02e80e4",
    TotalEdition = "895ebcb7-5251-4a19-a8c7-9c53edbaad2a",
    Delete = "16544857-a872-4b6c-8026-8ef86c80ee0e"
}

export enum UserRightsConstruccionManagement {
    Read = "c7acdee1-1f39-4366-b18f-d1ec006b4fee",
    Creation = "5da100a0-65da-4e03-bd52-6c83b8552002",
    Edition = "0bc88b6a-c306-4a18-a620-d6da2c1bf2da",
    AdvancedEdition = "ee1bc0c9-0b62-4fe6-8d1f-622ba07b8048",
    TotalEdition = "e2644f53-458a-46a5-95b6-4feef9fe119f",
    Delete = "f5f184e1-79be-4908-b789-a125f73d9ccd"
}

export const FieldIdsFormActivities = {
    Denomination: "Denomination",
    WBSCode: "WBSCode",
    SourceActivityId: "SourceActivityId",
    Location: "Location",
    ActivityState: "ActivityState",
    OriginalMeasurement: "OriginalMeasurement",
    ProgressType: "ProgressType",
    Progress: "Progress",
    ExecutedMeasurement: "ExecutedMeasurement",
    PendingMeasurement: "PendingMeasurement",
    EstimatedStartDate: "EstimatedStartDate",
    RealStartDate: "RealStartDate",
    ExpirationDate: "ExpirationDate",
    RealEndDate: "RealEndDate",
    ActivityType: "ActivityType",
    DelayReasons: "DelayReasons",
    AssignedTo: "AssignedTo",
    Milestone: "Milestone",
    MilestoneProgress: "MilestoneProgress",
    ButtonSave: "Save"
};

export enum IssuesDeleteReasonsIdsBD {
    Duplicated = "5c258746-6417-439b-a339-5247bb3d3d8f",
    InvalidCreation = "320c20c7-62a3-4ff4-a4b0-d67137112244",
    NotApplicable = "ab44a676-121e-4222-896b-52585405d724"
}

export enum IssuesAttachmentsConstants {
    IssuesFolderName = "Incidencias",
    IssueImageFolderName = "ImagenPrincipal",
    Attachments = "Adjuntos"
}

export enum ActivitiesAttachmentsConstants {
    ActivitiesFolderName = "Actividades",
    Attachments = "Adjuntos"
}

export const ACTIVITYCHANNELNAME = "Actividades";
export const ISSUECHANNELNAME = "Incidencias";
export const MANAGEMENTCONSTRUCTIONCHANNELNAME = "Gestión Obra";

export enum ActivityChangeOperations {
    Creation = "Creación",
    Modification = "Modificación",
    CreationStep = "Creación hito",
    ModificationStep = "Modificación hito"
}

export enum IssueChangeOperations {
    Creation = "Creación",
    Modification = "Modificación"
}

export enum ActivityViewCodes {
    AllActivities = 0,
    EndThisWeek = 1,
    NoEnding = 2,
    MyActivities = 3,
    NoStated = 4,
    StartedThisWeek = 5,
    WithIssues = 6,
    ExpirationNotEnded = 7,
    Deleted = 8,
    LookAhead = 9,
    ModifiedPeriod = 10
}

export enum IssueViewCodes {
    AllIssues = 0,
    CreatedLastWeek = 1,
    Unresolved = 2,
    MyIssues = 3,
    ReportedByMe = 4,
    ToResolveThisWeek = 5,
    Critical = 6,
    Deleted = 8,
    StarredIssues = 9
}

export enum NonEditableConstructionJobsIds {
    ConstructionChief = "bd2cd8f6-8dfc-4805-b431-7a790b4ff0f7",
    GroupChief = "7c3c7f83-316a-40ca-9479-2295343110f2",
    Manager = "ab7ba33d-aa81-41cd-9556-008f5dffecba",
    Administrativo = "e0a187dd-2878-411b-844d-db65deb373b5",
    AsistenteCostes = "f85a8488-307f-450c-be8c-3c76c901faa7",
    AsistentePredial = "ece5b99d-a164-44e7-9e86-4fe04a8368fd",
    AyudanteProduccion = "76c8b789-14e8-4d2d-bc50-0254f101c540",
    Capataz = "944b5e8d-161f-4755-94ac-09cdd0a8f122",
    CoordinadorGeologia = "34392f5e-1156-4575-b115-828b9119d7bc",
    CoordinadorPlanta = "5e614fb2-ff02-4df4-b6f5-b241c321316f",
    CoordinadorRedes = "99d31902-be3b-401d-ace5-a31714f8a789",
    Delineante = "91091666-395b-4aac-bba3-5b235b9ae792",
    DirectorIngeneria = "ee60b678-a503-46cf-878f-2036534a8af2",
    Encargado = "60c9c57a-d3a1-45fe-93fc-6ac601e330d9",
    IngenieroMediciones = "95f7f8e0-208e-487f-94d5-d974a570ebb6",
    JefeAdministrativo = "28838628-ca1d-4931-90e2-f05922ecba4d",
    JefeCalidad = "a153772d-3afa-4200-8485-62eda1d13eb9",
    JefeCompras = "69cb5f9c-4aad-429b-90e0-5f1767300322",
    JefeControlCostes = "c26f528e-7ad6-4583-8b06-0201684f1432",
    JefeInstalaciones = "1acc7117-998d-4c1c-90c5-a1ad419e4407",
    JefeLaboratorio = "8d1ca92a-57a2-441f-bc20-3ebe02aff14f",
    JefeMaquinaria = "fbb63a70-3ee9-42aa-905f-fe64ab81e852",
    JefeMedioambiente = "f6bc7b11-ff45-456a-9529-8b9b8d5d4be6",
    JefeOficinaTecnica = "8b1c68fc-5709-46a0-814d-965396ad7d0d",
    JefePredial = "42222c05-65b3-4a76-ad45-a04ba81ff10b",
    JefeProduccion = "cc20c70e-18a6-4399-9da9-d7c71318c8e0",
    JefeRedes = "1fd725be-77c8-4dae-859e-a9eab40a03be",
    JefeSeguridadSalud = "fe0cfea2-90c6-4b0b-a536-f7b7224b0833",
    JefeTaludes = "fdbca4ac-50fa-4030-9042-09224eb93cd8",
    JefeTierras = "91223be6-fcb7-4baa-a9c4-f5cf931ea760",
    JefeTopografia = "e0f5af26-1e8f-42e5-951b-f14af653ff27",
    JefeTramo = "8494bd75-7f8c-40fe-aaef-b1b023a593e7",
    JefeVoladuras = "50b3649d-ffc6-4921-a8b3-b66a4e856126",
    Oficial = "a0038c32-182e-4e99-9e23-dddda7dd740b",
    OficialMaquinaria = "3de5d6e1-86de-488d-b063-36e9c67ecb6d",
    ResponsableAlmacen = "dbe20593-54e8-48d4-9da7-9876d45cf139",
    ResponsableBIM = "f4ec971f-f8a7-4c29-843b-11acd8cf7712",
    ResponsableBREEM = "a0c6ac67-6f71-4123-98fc-85d3667dc963",
    ResponsableGDocumental = "e12a6eec-f86e-45af-becc-e9026c8749cd",
    ResponsableLEED = "3bfd2e27-65de-40f2-8ca5-961cc2782cf7",
    ResponsablePlanificacion = "b9fd5a47-a5c4-4a49-8c14-560b3f518223",
    ResponsbleRRHH = "33d18417-898a-4606-b5b9-d49e8c90b99a",
    ResponsbleTTHH = "34a55887-81a9-4931-9cd1-2f3edd160732",
    TecnicoAlmacen = "93afa6ba-2aa9-4efc-8bb3-bff18113b0c4",
    TecnicoBIM = "f632cdb8-7826-402b-9157-405ef5cee1e8",
    TecnicoCompras = "b4a5758e-92af-4df8-8f5e-ec5d8c8d01dc",
    TecnicoInstalaciones = "18190d60-138b-4bf0-8eb6-581fda94c384",
    TecnicoDesvios = "b04a5cfd-517b-4965-9dee-63db64de51b1",
    TecnicoGDocumental = "56d2cca1-482d-494f-937b-ef9b80c3b103",
    TecnicoLaboratorio = "75de3c37-8767-464e-b077-165cb918e2fb",
    TecnicoMedioambiente = "266281e6-03d7-4e1d-b602-69c5c72ecdce",
    TecnicoPlanificacion = "8a70c294-ad4d-4508-8db9-2aee28171b19",
    TecnicoPrevencion = "050fd194-c8a8-40c0-9b7d-5ad4f98edc0b",
    TecnicoRRHH = "dfd1857d-f103-4932-908d-9b2eb98f8659",
    TecnicoTTHH = "2f42f0a4-50f4-4fa6-a915-056e5249ca05",
    Topografo = "6444a2a2-7617-423b-bf1a-9ace8b3f3317"
}

export const HostClientTypeTeams = {
    Android: "android",
    Desktop: "desktop",
    Ios: "ios",
    Rigel: "rigel",
    Web: "web"
};

export const MobileViewIssue = {
    List: 0,
    DetailEditForm: 1,
    NewForm: 2
};

export const MobileViewActivity = {
    List: 0,
    DetailEditForm: 1,
    NewForm: 2
};

export enum Functionality {
    Activities = "Activities",
    Issues = "Issues"
}

export enum GPSUbication {
    Latitude = "Latitude",
    Longitude = "Longitude"
}

export enum ImportActivityAction {
    Create = "Create",
    Modify = "Modify"
}

export enum ImportStepAction {
    CreateStep = "CreateStep"
}

export enum ImportActivitiesSecurityErrors {
    OriginalMeasurementModifiedWithoutPermissions = "OriginalMeasurementModifiedWithoutPermissions",
    EstimatedStartDateModifiedWithoutPermissions = "EstimatedStartDateModifiedWithoutPermissions",
    ExpirationDateModifiedWithoutPermissions = "ExpirationDateModifiedWithoutPermissions",
    ActivityTypeModifiedWithoutPermissions = "ActivityTypeModifiedWithoutPermissions",
    WBSCodeModifiedWithoutPermissions = "WBSCodeModifiedWithoutPermissions",
    DenominationModifiedWithoutPermissions = "DenominationModifiedWithoutPermissions",
    ProgressTypeModifiedWithoutPermissions = "ProgressTypeModifiedWithoutPermissions",
    AssignedToModifiedWithoutPermissions = "AssignedToModifiedWithoutPermissions",
    UserWithoutPermissions = "UserWithoutPermissions"
}

export enum ImportActivitiesMandatoryErrors {
    ConstructionCodeEmptyValidationError = "ConstructionCodeEmptyValidationError",
    MandatoryDenomination = "MandatoryDenomination",
    MandatorySourceActivity = "MandatorySourceActivity",
    MandatoryWBSCode = "MandatoryWBSCode",
    MandatoryActivityState = "MandatoryActivityState",
    ProgressTypeEmptyValidationError = "ProgressTypeEmptyValidationError",
    MandatoryProgressType = "MandatoryProgressType",
    MandatoryProgress = "MandatoryProgress",
    MandatoyOriginalMeasurement = "MandatoyOriginalMeasurement",
    MandatoryEstimatedStartDate = "MandatoryEstimatedStartDate",
    MandatoryExpirationDate = "MandatoryExpirationDate",
    MandatoryLocation = "MandatoryLocation",
    LocationEmptyValidationError = "LocationEmptyValidationError",
    MandatoryActivityType = "MandatoryActivityType",
}

export enum ImportActivitiesValidationErrors {
    MaxActivitiesToImportLimitValidationError = "MaxActivitiesToImportLimitValidationError",
    WBSCodeLengthValidationError = "WBSCodeLengthValidationError",
    DenominationLengthValidationError = "DenominationLengthValidationError",
    ConstructionCodeIncorrectValidationError = "ConstructionCodeIncorrectValidationError",
    ProgressValidationError = "ProgressValidationError",
    ExecutedMeasurementValidationError = "ExecutedMeasurementValidationError",
    PendingMeasurementValidationError = "PendingMeasurementValidationError",
    RealStartDateValidationError = "RealStartDateValidationError",
    RealEndDateValidationError = "RealEndDateValidationError",
    DenominationValidationError = "DenominationValidationError",
    SourceActivityIdValidationError = "SourceActivityIdValidationError",
    WBSCodeValidationError = "WBSCodeValidationError",
    OriginalMeasurementValidationError = "OriginalMeasurementValidationError",
    ProgressTypeValidationError = "ProgressTypeValidationError",
    EstimatedStartDateValidationError = "EstimatedStartDateValidationError",
    ExpirationDateValidationError = "ExpirationDateValidationError",
    LocationValidationError = "LocationValidationError",
    AssignedToValidationError = "AssignedToValidationError",
    AssignedToLengthValidationError = "AssignedToLengthValidationError",
    DelayReasonsValidationError = "DelayReasonsValidationError",
    DelayReasonInvalidValidationError = "DelayReasonInvalidValidationError",
    DelayReasonEmptyWithFinishDateDelayValidationError = "DelayReasonEmptyWithFinishDateDelayValidationError",
    DeleteValidationError = "DeleteValidationError",
    DeleteActivityEmptyOrInvalidValidationError = "DeleteActivityEmptyOrInvalidValidationError",
    AssignedToInvalidUserValidationError = "AssignedToInvalidUserValidationError",
    DeletedActivityValidationError = "DeletedActivityValidationError",
    ExecutedMeasurementEmptyOrInvalidValidationError = "ExecutedMeasurementEmptyOrInvalidValidationError",
    ExecutedMeasurementOutOfRangeValidationError = "ExecutedMeasurementOutOfRangeValidationError",
    ExecutedMeasurementMustBeEmptyValidationError = "ExecutedMeasurementMustBeEmptyValidationError",
    PendingMeasurementEmptyOrInvalidValidationError = "PendingMeasurementEmptyOrInvalidValidationError",
    PendingMeasurementMustBeEmptyValidationError = "PendingMeasurementMustBeEmptyValidationError",
    PendingMeasurementOutOfRangeValidationError = "PendingMeasurementOutOfRangeValidationError",
    ProgressInvalidValidationError = "ProgressInvalidValidationError",
    ProgressInvalidPercentageValidationError = "ProgressInvalidPercentageValidationError",
    NotStartedProgressValidationError = "NotStartedProgressValidationError",
    NotStartedExecutedMeasurementValidationError = "NotStartedExecutedMeasurementValidationError",
    NotStartedPendingMeasurementValidationError = "NotStartedPendingMeasurementValidationError",
    NotStartedRealStartDateValidationError = "NotStartedRealStartDateValidationError",
    NotStartedRealEndDateValidationError = "NotStartedRealEndDateValidationError",
    InProgressRealStartDateValidationError = "InProgressRealStartDateValidationError",
    InProgressRealEndDateValidationError = "InProgressRealEndDateValidationError",
    ParalyzedRealEndDateValidationError = "ParalyzedRealEndDateValidationError",
    ParalyzedZeroProgressValidationError = "ParalyzedZeroProgressValidationError",
    ParalyzedDenominationValidationError = "ParalyzedDenominationValidationError",
    ParalyzedSourceActivityIdValidationError = "ParalyzedSourceActivityIdValidationError",
    ParalyzedWBSCodeValidationError = "ParalyzedWBSCodeValidationError",
    ParalyzedOriginalMeasurementValidationError = "ParalyzedOriginalMeasurementValidationError",
    ParalyzedProgressTypeValidationError = "ParalyzedProgressTypeValidationError",
    ParalyzedProgressValidationError = "ParalyzedProgressValidationError",
    ParalyzedExecutedMeasurementValidationError = "ParalyzedExecutedMeasurementValidationError",
    ParalyzedPendingMeasurementValidationError = "ParalyzedPendingMeasurementValidationError",
    ParalyzedEstimatedStartDateValidationError = "ParalyzedEstimatedStartDateValidationError",
    ParalyzedRealStartDateValidationError = "ParalyzedRealStartDateValidationError",
    ParalyzedExpirationDateValidationError = "ParalyzedExpirationDateValidationError",
    ParalyzedLocationValidationError = "ParalyzedLocationValidationError",
    ParalyzedAssignedToValidationError = "ParalyzedAssignedToValidationError",
    ParalyzedDelayReasonsValidationError = "ParalyzedDelayReasonsValidationError",
    FinishedProgressValidationError = "FinishedProgressValidationError",
    FinishedRealStartDateValidationError = "FinishedRealStartDateValidationError",
    FinishedRealEndDateValidationError = "FinishedRealEndDateValidationError",
    FinishedExecutedMeasurementValidationError = "FinishedExecutedMeasurementValidationError",
    FinishedPendingMeasurementValidationError = "FinishedPendingMeasurementValidationError",
    FinishedAssignedToValidationError = "FinishedAssignedToValidationError",
    FinishedLocationValidationError = "FinishedLocationValidationError",
    FinishedCreatingMilestoneValidationError = "FinishedCreatingMilestoneValidationError",
    FinishedLaterRealEndDateValidationError = "FinishedLaterRealEndDateValidationError",
    NotStartedDeleteValidationError = "NotStartedDeleteValidationError",
    InProgressZeroProgressValidationError = "InProgressZeroProgressValidationError",
    RelatedIssuesValidationError = "RelatedIssuesValidationError",
    RelatedIssuesSaveError = "RelatedIssuesSaveError",
}

export enum ImportStepsValidationErrors {
    MaxStepsToImportLimitValidationError = "MaxStepsToImportLimitValidationError",
    StepConstructionCodeIncorrectValidationError = "StepConstructionCodeIncorrectValidationError",
    StepWeightEmptyOrInvalidValidationError = "StepWeightEmptyOrInvalidValidationError",
    StepWeightNegativeOrZeroValidationError = "StepWeightNegativeOrZeroValidationError",
    StepProgressEmptyOrInvalidValidationError = "StepProgressEmptyOrInvalidValidationError",
    StepProgressOutOfRangePercentageValidationError = "StepProgressOutOfRangePercentageValidationError",
    StepActiveValidationError = "StepActiveValidationError",
    StepsActivityIdNotExistInActivitySheetValidationError = "StepsActivityIdNotExistInActivitySheetValidationError",
    CalculatedProgressErrorValidationError = "CalculatedProgressErrorValidationError",
}

export enum ManagementConstructionSectionsCode {
    SectionData = 0,
    SectionLocations = 1,
    SectionRoles = 2,
    SectionUsers = 3,
    SectionJobs = 4,
    SectionIssuesOutsource = 5,
    SectionManagActivities = 6
}

export enum ImportStepsMandatoryErrors {
    EmptyStepsValidationError = "EmptyStepsValidationError",
    StepIdEmptyValidationError = "StepIdEmptyValidationError",
    StepConstructionCodeEmptyValidationError = "StepConstructionCodeEmptyValidationError",
    StepsActivityIdEmptyValidationError = "StepsActivityIdEmptyValidationError",
}

export enum TeamsRolesKeys {
    Owner = "Owner",
    Member = "Member",
    Guest = "Guest"
}

export const LCIDS = {
    Spanish: 3082,
    English: 1033,
    Portuguese_PT: 2070,
    Portuguese_BR: 1046
};

export const SPLISTADMIN = {
    LIST_BITACORA_SOCIETY: "Bitacora%20%20Sociedades",
    LIST_BITACORA_COUNTRY: "Bitacora%20%20Pases",
    LIST_BITACORA_BUSINESS: "Bitacora%20%20Negocios",
    LIST_BITACORA_DIVISION: "Bitacora%20%20Divisiones%20obra",
    LIST_BITACORA_STATES: "Bitacora%20%20Situaciones%20obra",
    LIST_BITACORA_TYPES: "Bitacora%20%20Tipos%20de%20obra"
};

export enum NewUserMode {
    Simple = "Simple",
    Bulk = "Bulk",
    Import = "Import",
}