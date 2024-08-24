FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

# Copy solution and project files
COPY LandingAPI.sln ./
COPY ClassLibrary1/ClassLibrary1.csproj ClassLibrary1/
COPY DataContext/DataContext.csproj DataContext/
COPY Models/Models.csproj Models/
COPY Services/Services.csproj Services/
COPY Common/Common.csproj Common/
COPY Repositories/Repositories.csproj Repositories/
COPY LandingAPI/API.csproj LandingAPI/

# Restore dependencies
RUN dotnet restore

# Copy the remaining files
COPY . ./

# Build and publish the application
RUN dotnet publish LandingAPI/API.csproj -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 80
ENTRYPOINT ["dotnet", "API.dll"]

