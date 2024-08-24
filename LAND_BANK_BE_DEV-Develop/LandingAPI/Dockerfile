# Stage 1: Build the application
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

# Copy the solution and project files
COPY LandingAPI.sln ./
COPY LandingAPI/API.csproj LandingAPI/
COPY ClassLibrary1/ClassLibrary1.csproj ClassLibrary1/
COPY Common/Common.csproj Common/
COPY DataContext/DataContext.csproj DataContext/
COPY Models/Models.csproj Models/
COPY Repositories/Repositories.csproj Repositories/
COPY Services/Services.csproj Services/

# Restore dependencies
RUN dotnet restore

# Copy the rest of the application files
COPY . ./

# Build and publish the application
RUN dotnet publish LandingAPI/API.csproj -c Release -o /app/publish

# Stage 2: Run the application
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app

# Copy the published files from the build stage
COPY --from=build /app/publish ./

# Set the entry point for the application
ENTRYPOINT ["dotnet", "API.dll"]
