-- CreateTable
CREATE TABLE "Agency" (
    "id" SERIAL NOT NULL,
    "agencyId" VARCHAR(255) NOT NULL,
    "agencyName" VARCHAR(255) NOT NULL,
    "agencyUrl" VARCHAR(255) NOT NULL,
    "agencyTimezone" TEXT NOT NULL,
    "agencyLang" TEXT NOT NULL,
    "agencyPhone" VARCHAR(255) NOT NULL,

    CONSTRAINT "Agency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalendarDates" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "exceptionType" INTEGER NOT NULL,

    CONSTRAINT "CalendarDates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Routes" (
    "id" SERIAL NOT NULL,
    "routeId" INTEGER NOT NULL,
    "agencyId" VARCHAR(255) NOT NULL,
    "routeShortName" VARCHAR(255) NOT NULL,
    "routeLongName" VARCHAR(255) NOT NULL,
    "routeType" INTEGER NOT NULL,
    "routeUrl" VARCHAR(255),
    "routeColor" VARCHAR(255),

    CONSTRAINT "Routes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shapes" (
    "id" SERIAL NOT NULL,
    "shapeId" INTEGER NOT NULL,
    "shapePtLat" DOUBLE PRECISION NOT NULL,
    "shapePtLon" DOUBLE PRECISION NOT NULL,
    "shapePtSeq" INTEGER NOT NULL,
    "shapeDistTraveled" DOUBLE PRECISION,

    CONSTRAINT "Shapes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StopTimes" (
    "id" SERIAL NOT NULL,
    "tripId" INTEGER NOT NULL,
    "arrivalTime" TIME(3) NOT NULL,
    "departureTime" TIME(3) NOT NULL,
    "stopId" INTEGER NOT NULL,
    "stopSequence" INTEGER NOT NULL,
    "pickupType" INTEGER DEFAULT 0,
    "dropOffType" INTEGER DEFAULT 0,
    "shapeDistTraveled" DOUBLE PRECISION,

    CONSTRAINT "StopTimes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stops" (
    "id" SERIAL NOT NULL,
    "stopId" INTEGER NOT NULL,
    "stopCode" VARCHAR(255) NOT NULL,
    "stopName" VARCHAR(255) NOT NULL,
    "stopDesc" TEXT,
    "stopLat" DOUBLE PRECISION NOT NULL,
    "stopLon" DOUBLE PRECISION NOT NULL,
    "zoneId" INTEGER NOT NULL,
    "wheelchairBoarding" INTEGER DEFAULT 0,

    CONSTRAINT "Stops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trips" (
    "id" SERIAL NOT NULL,
    "routeId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "tripId" INTEGER NOT NULL,
    "tripHeadsign" VARCHAR(255) NOT NULL,
    "directionId" INTEGER NOT NULL,
    "blockId" INTEGER,
    "shapeId" INTEGER NOT NULL,

    CONSTRAINT "Trips_pkey" PRIMARY KEY ("id")
);
