export class AADAppConfiguration {
    private clientId: string;
    private tenantId: string;
    private clientSecret: string;
  
    constructor($clientId: string, $tenantId: string, $clientSecret: string) {
      this.clientId = $clientId;
      this.tenantId = $tenantId;
      this.clientSecret = $clientSecret;
    }
  
    /**
   * Getter $clientId
   * @return {string}
   */
    public get $clientId(): string {
      return this.clientId;
    }
  
    /**
     * Getter $tenantId
     * @return {string}
     */
    public get $tenantId(): string {
      return this.tenantId;
    }
  
    /**
     * Getter $clientSecret
     * @return {string}
     */
    public get $clientSecret(): string {
      return this.clientSecret;
    }
  }